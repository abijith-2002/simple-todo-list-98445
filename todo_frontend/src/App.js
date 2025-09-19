import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

/**
 * PUBLIC_INTERFACE
 * App
 * A modern, Ocean Professional themed Todo List UI. Frontend-only.
 * Features: add, edit, delete, toggle complete, and filter (all/active/completed).
 */
function App() {
  // Theme handling (light/dark) with persistence and system preference
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      // Fallback to system preference on first load
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // ignore
    }
    return 'light';
  });

  // Todo state
  const [todos, setTodos] = useState(() => {
    // Initialize from localStorage to persist within browser
    try {
      const raw = localStorage.getItem('todos');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Input state
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all'); // all | active | completed

  // Persist todos
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch {
      // no-op for storage errors
    }
  }, [todos]);

  // Apply theme to root and persist choice
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // no-op if storage unavailable
    }
  }, [theme]);

  // Derived list based on filter
  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.completed);
    if (filter === 'completed') return todos.filter(t => t.completed);
    return todos;
  }, [todos, filter]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  // PUBLIC_INTERFACE
  function addTodo(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    if (editId) {
      // Update existing todo
      setTodos(prev =>
        prev.map(t => (t.id === editId ? { ...t, text: value } : t))
      );
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text: value,
        completed: false,
        createdAt: Date.now(),
      };
      setTodos(prev => [newTodo, ...prev]);
    }
    setText('');
  }

  // PUBLIC_INTERFACE
  function startEdit(id) {
    const t = todos.find(x => x.id === id);
    if (!t) return;
    setEditId(id);
    setText(t.text);
  }

  // PUBLIC_INTERFACE
  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
    if (editId === id) {
      setEditId(null);
      setText('');
    }
  }

  // PUBLIC_INTERFACE
  function toggleComplete(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  // PUBLIC_INTERFACE
  function clearCompleted() {
    setTodos(prev => prev.filter(t => !t.completed));
  }

  // PUBLIC_INTERFACE
  function cancelEdit() {
    setEditId(null);
    setText('');
  }

  const leftCount = useMemo(() => todos.filter(t => !t.completed).length, [todos]);

  // PUBLIC_INTERFACE
  function exportTasksAsPDF() {
    /**
     * Generates a PDF with all current tasks and their status and triggers a download.
     * Uses jsPDF and autoTable to create a clean, readable table consistent with the app theme.
     */
    try {
      const doc = new jsPDF({ unit: 'pt', format: 'a4' }); // points for precise layout
      const marginX = 40;
      const marginY = 46;

      // Title and subtitle
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(37, 99, 235); // --primary
      doc.text('Todo List — Export', marginX, marginY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(17, 24, 39); // --text (dark)
      const date = new Date();
      const dateLine = `Generated: ${date.toLocaleString()}`;
      doc.text(dateLine, marginX, marginY + 18);

      // Build rows from all todos (not just filtered)
      const rows = todos.length
        ? todos.map((t, idx) => [
            idx + 1,
            t.completed ? 'Completed' : 'Pending',
            t.text || '',
          ])
        : [['—', '—', 'No tasks']];

      // Table styling consistent with theme
      doc.autoTable({
        startY: marginY + 34,
        head: [['#', 'Status', 'Task']],
        body: rows,
        styles: {
          font: 'helvetica',
          fontSize: 11,
          cellPadding: 8,
          textColor: [17, 24, 39],
        },
        headStyles: {
          fillColor: [37, 99, 235],
          textColor: [255, 255, 255],
          halign: 'left',
          fontStyle: 'bold',
        },
        alternateRowStyles: { fillColor: [243, 244, 246] }, // light gray
        columnStyles: {
          0: { cellWidth: 40, halign: 'left' },
          1: { cellWidth: 100 },
          2: { cellWidth: 'auto' },
        },
        margin: { left: marginX, right: marginX },
        didParseCell: (data) => {
          // Color status text: amber for pending, muted gray for completed
          if (data.section === 'body' && data.column.index === 1) {
            if (data.cell.raw === 'Completed') {
              data.cell.styles.textColor = [107, 114, 128]; // --muted
            } else {
              data.cell.styles.textColor = [245, 158, 11]; // --amber
              data.cell.styles.fontStyle = 'bold';
            }
          }
        },
      });

      const fileName = `todo_export_${date.toISOString().replace(/[:.]/g, '-')}.pdf`;
      doc.save(fileName);
    } catch (err) {
      // Basic error guard (e.g., if jsPDF fails)
      // eslint-disable-next-line no-console
      console.error('Failed to export PDF:', err);
      alert('Sorry, there was a problem exporting your PDF.'); // basic UX feedback
    }
  }

  return (
    <div className="ocean-app">
      <div className="ocean-gradient" />
      <header className="ocean-header">
        <div className="header-top">
          <h1 className="title">
            <span className="title-accent">Todo</span> List
          </h1>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <p className="subtitle">Organize tasks with a clean, modern interface.</p>
      </header>

      <main className="container">
        <form className="todo-form" onSubmit={addTodo} aria-label="Add todo form">
          <input
            className="input"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={editId ? 'Update your task...' : 'Add a new task...'}
            aria-label={editId ? 'Edit task text' : 'New task text'}
            autoFocus
          />
          <div className="actions">
            {editId ? (
              <>
                <button type="submit" className="btn primary" aria-label="Save changes">
                  Save
                </button>
                <button type="button" className="btn subtle" onClick={cancelEdit} aria-label="Cancel edit">
                  Cancel
                </button>
              </>
            ) : (
              <button type="submit" className="btn primary" aria-label="Add task">
                Add
              </button>
            )}
          </div>
        </form>

        <div className="toolbar" aria-label="Todo toolbar">
          <div className="filters" aria-label="Filter todos" aria-controls="todo-list">
            <button
              className={`chip ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
            >
              All
            </button>
            <button
              className={`chip ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
              aria-pressed={filter === 'active'}
            >
              Active
            </button>
            <button
              className={`chip ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
              aria-pressed={filter === 'completed'}
            >
              Completed
            </button>
          </div>
          <div className="toolbar-right">
            <span className="muted">{leftCount} left</span>
            <button className="btn subtle" onClick={exportTasksAsPDF} type="button" aria-label="Export tasks as PDF" title="Export tasks as PDF">
              ⤓ Export as PDF
            </button>
            <button className="btn amber" onClick={clearCompleted} type="button">
              Clear completed
            </button>
          </div>
        </div>

        <ul id="todo-list" className="todo-list" aria-live="polite">
          {filteredTodos.length === 0 ? (
            <li className="empty">No tasks yet. Add one to get started.</li>
          ) : (
            filteredTodos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={!!todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
                  />
                  <span className="checkmark" />
                </label>

                <span className="todo-text" onDoubleClick={() => startEdit(todo.id)}>
                  {todo.text}
                </span>

                <div className="row-actions">
                  <button className="icon-btn edit" onClick={() => startEdit(todo.id)} title="Edit">
                    ✏️
                  </button>
                  <button className="icon-btn danger" onClick={() => deleteTodo(todo.id)} title="Delete" aria-label="Delete">
                    🗑️
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </main>

      <footer className="footer">
        <p className="footnote">Built with Ocean Professional theme • Blue & amber accents</p>
      </footer>
    </div>
  );
}

export default App;
