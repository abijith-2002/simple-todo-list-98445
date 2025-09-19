import React, { useEffect } from 'react';
import styles from './FileCover.module.css';
// Import DS and specific screen styles as global CSS for accurate reproduction
import '../../styles/design-system.css';
import '../../styles/file-cover-61-8.css';

/**
 * PUBLIC_INTERFACE
 * FileCover
 * A React component rendering the static "File cover — 61:8" screen generated from Figma.
 * The content is kept close to the original absolute-positioned layout for fidelity.
 */
function FileCover() {
  useEffect(() => {
    // Mimic minimal JS from assets/app.js
    // PUBLIC_INTERFACE
    console.debug('Static screens loaded: file-cover-61-8');
  }, []);

  return (
    <div className={`${styles.canvas} figma-canvas style-0-bg`}>
      {/* Frame: transfer */}
      <div className="frame abs" id="frame-transfer" style={{ left: 473, top: 81, width: 375, height: 812 }}>
        {/* Decorative Ellipses */}
        <div className="ellipse abs style-2-bg" style={{ left: -200, top: 253, width: 200, height: 200 }} />
        <div className="ellipse abs style-4-bg" style={{ left: 375, top: -74, width: 200, height: 200 }} />

        {/* Top avatar group */}
        <div className="abs" style={{ left: 0, top: 39, width: 43, height: 43 }}>
          <div className="ellipse abs style-9-bg" style={{ left: 0, top: 0, width: 43, height: 43 }} />
          <img
            src="/assets/figma_image_54_152.png"
            alt="avatar"
            className="abs ellipse"
            style={{ left: 2.606, top: 2.606, width: 37.788, height: 37.788, objectFit: 'cover' }}
          />
          <div className="ellipse abs style-10" style={{ left: 34.53, top: 1.955, width: 8.47, height: 8.47 }} />
        </div>

        {/* Title */}
        <div className="abs abs-text typo-12" style={{ left: 150, top: 50, width: 76, height: 21 }}>Transfer</div>

        {/* Quick action groups */}
        <div className="abs style-11" style={{ left: 18, top: 115, width: 76, height: 76 }}>
          <div className="abs style-19" style={{ left: 0, top: 0, width: 76, height: 76, borderRadius: 16 }} />
          <img
            src="/assets/figma_image_54_157.png"
            alt=""
            className="abs round-16"
            style={{ left: 0, top: 0, width: 76, height: 76, objectFit: 'cover' }}
          />
        </div>

        <div className="abs style-11" style={{ left: 106, top: 115, width: 76, height: 76 }}>
          <div className="abs style-19" style={{ left: 0, top: 0, width: 76, height: 76, borderRadius: 16 }} />
          <img
            src="/assets/figma_image_54_160.png"
            alt=""
            className="abs round-16"
            style={{ left: 0, top: 0, width: 76, height: 76, objectFit: 'cover' }}
          />
        </div>

        <div className="abs style-11" style={{ left: 194, top: 115, width: 76, height: 76 }}>
          <div className="abs style-19" style={{ left: 0, top: 0, width: 76, height: 76, borderRadius: 16 }} />
          <div className="abs round-16" style={{ left: 11, top: 14, width: 54, height: 54, background: '#ccc' }} />
        </div>

        <div className="abs style-11" style={{ left: 282, top: 115, width: 76, height: 76 }}>
          <div className="abs style-19" style={{ left: 0, top: 0, width: 76, height: 76, borderRadius: 16 }} />
          <div className="abs round-16" style={{ left: 12, top: 14, width: 54, height: 54, background: '#ccc' }} />
        </div>

        {/* Add payee icon placeholder */}
        <div className="abs" style={{ left: 333, top: 51, width: 18, height: 18, background: 'var(--color-333333)', borderRadius: 2 }} />

        {/* Payee list container */}
        <div className="abs" style={{ left: 24, top: 226, width: 327, height: 494 }}>
          {/* Row 1 */}
          <div className="abs style-7" style={{ left: 0, top: 0, width: 327, height: 86 }}>
            <div className="ellipse abs" style={{ left: 16, top: 16, width: 54, height: 54, background: '#d9d9d9' }} />
            <div className="abs abs-text typo-13" style={{ left: 31, top: 32, width: 23, height: 21 }}>ES</div>
            <div className="abs abs-text typo-14" style={{ left: 86, top: 19, width: 101, height: 19 }}>Evelyn Smith </div>
            <div className="abs abs-text typo-15" style={{ left: 86, top: 46, width: 201, height: 17 }}>AW BANK UNI 234-46589-000</div>
          </div>
          {/* Row 2 */}
          <div className="abs style-7" style={{ left: 0, top: 102, width: 327, height: 86 }}>
            <div className="ellipse abs" style={{ left: 16, top: 16, width: 54, height: 54, background: '#d9d9d9' }} />
            <div className="abs abs-text typo-13" style={{ left: 31, top: 32, width: 24, height: 21 }}>EA</div>
            <div className="abs abs-text typo-14" style={{ left: 86, top: 19, width: 114, height: 19 }}>Emily Atkinson</div>
            <div className="abs abs-text typo-15" style={{ left: 86, top: 46, width: 201, height: 17 }}>AW BANK UNI 234-46589-000</div>
          </div>
          {/* Row 3 */}
          <div className="abs style-7" style={{ left: 0, top: 204, width: 327, height: 86 }}>
            <div className="ellipse abs" style={{ left: 16, top: 16, width: 54, height: 54, background: '#d9d9d9' }} />
            <div className="abs abs-text typo-13" style={{ left: 31, top: 32, width: 28, height: 21 }}>OW</div>
            <div className="abs abs-text typo-14" style={{ left: 86, top: 19, width: 97, height: 19 }}>Oliver Wilson </div>
            <div className="abs abs-text typo-15" style={{ left: 86, top: 46, width: 201, height: 17 }}>AW BANK UNI 234-46589-000</div>
          </div>
          {/* Row 4 */}
          <div className="abs style-7" style={{ left: 0, top: 306, width: 327, height: 86 }}>
            <div className="ellipse abs" style={{ left: 16, top: 16, width: 54, height: 54, background: '#d9d9d9' }} />
            <div className="abs abs-text typo-13" style={{ left: 31, top: 32, width: 27, height: 21 }}>CW</div>
            <div className="abs abs-text typo-14" style={{ left: 86, top: 19, width: 112, height: 19 }}>Charlie William</div>
            <div className="abs abs-text typo-15" style={{ left: 86, top: 46, width: 201, height: 17 }}>AW BANK UNI 234-46589-000</div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="abs" style={{ left: 0, top: 730, width: 375, height: 82 }}>
          <div className="abs bottom-nav-bg" style={{ left: 0, top: 0, width: 375, height: 82 }} />
          <div className="abs style-6-bg" style={{ left: 46, top: 25, width: 20.25, height: 15.75, borderRadius: 2 }} />
          <div className="abs" style={{ left: 128, top: 24, width: 18, height: 18, background: '#bbb', borderRadius: 2 }} />
          <div className="abs style-6-bg" style={{ left: 220, top: 24, width: 20.25, height: 18, borderRadius: 2 }} />
          <div className="abs style-6-bg" style={{ left: 312, top: 34, width: 14.25, height: 3, borderRadius: 2 }} />
        </div>
      </div>

      {/* Frame: account overview */}
      <div className="frame abs" id="frame-account-overview" style={{ left: 25, top: 81, width: 375, height: 812 }}>
        <div className="ellipse abs style-2-bg" style={{ left: -72, top: 246, width: 200, height: 200 }} />
        <div className="ellipse abs style-12-bg" style={{ left: 231, top: -74, width: 200, height: 200 }} />

        {/* User header */}
        <div className="abs" style={{ left: 24, top: 63, width: 194, height: 66 }}>
          <div className="ellipse abs style-9-bg" style={{ left: 0, top: 0, width: 66, height: 66 }} />
          <div className="ellipse abs style-9-bg" style={{ left: 4, top: 4, width: 58, height: 58, background: '#d9d9d9' }} />
          <div className="ellipse abs style-14" style={{ left: 53, top: 3, width: 13, height: 13, borderRadius: '50%' }} />
          <div className="abs abs-text typo-21" style={{ left: 88, top: 7, width: 106, height: 19 }}>Good morning</div>
          <div className="abs abs-text typo-22" style={{ left: 88, top: 35, width: 101, height: 28 }}>ANDREA</div>
        </div>

        {/* Card group */}
        <div className="abs" style={{ left: 24, top: 155, width: 327, height: 197 }}>
          <div className="card-outer abs" style={{ left: 0, top: 0, width: 327, height: 197 }} />
          <div className="abs style-7" style={{ left: 0, top: 0, width: 327, height: 197, borderRadius: 16, opacity: 0.9 }} />
          <div className="ellipse abs" style={{ left: -24, top: -32, width: 200, height: 200, background: 'rgba(127, 127, 127, 0.10)', borderRadius: '50%' }} />
          <div className="ellipse abs" style={{ left: 214, top: 9, width: 200, height: 200, background: 'rgba(127, 127, 127, 0.10)', borderRadius: '50%' }} />
          <div className="abs style-13" style={{ left: 0, top: 0, width: 327, height: 197 }} />
          <div className="abs" style={{ left: 0, top: 109, width: 327, height: 88, background: 'transparent' }} />

          <div className="abs abs-text typo-16" style={{ left: 16, top: 26, width: 116, height: 17 }}>Current Balance</div>
          <div className="abs abs-text typo-17" style={{ left: 16, top: 58, width: 144, height: 33 }}>$12567.89</div>
          <div className="abs abs-text typo-18" style={{ left: 16, top: 130, width: 222, height: 23 }}>3452 1235 7894 1678</div>
          <div className="abs abs-text typo-19" style={{ left: 16, top: 158, width: 63, height: 18 }}>05/2025</div>
        </div>

        {/* Last transactions list */}
        <div className="abs" style={{ left: 24, top: 371, width: 327, height: 385 }}>
          <div className="abs abs-text typo-20" style={{ left: 0, top: 0, width: 129, height: 17 }}>LAST transactions</div>

          <div className="abs style-7" style={{ left: 0, top: 33, width: 327, height: 76 }}>
            <div className="abs abs-text typo-14" style={{ left: 16, top: 16, width: 241, height: 19 }}>Shopping</div>
            <div className="abs abs-text typo-15" style={{ left: 16, top: 43, width: 167.145, height: 17 }}>Tue 12.05.2021</div>
            <div className="abs abs-text typo-14" style={{ left: 273, top: 23.5, width: 54, height: 19 }}>$29.90</div>
          </div>

          <div className="abs style-7" style={{ left: 0, top: 125, width: 327, height: 76 }}>
            <div className="abs abs-text typo-14" style={{ left: 16, top: 16, width: 251, height: 19 }}>Movie Ticket</div>
            <div className="abs abs-text typo-15" style={{ left: 16, top: 43, width: 174.081, height: 17 }}>Mon 11.05.2021</div>
            <div className="abs abs-text typo-14" style={{ left: 283, top: 23.5, width: 44, height: 19 }}>$9.50</div>
          </div>

          <div className="abs style-7" style={{ left: 0, top: 217, width: 327, height: 76 }}>
            <div className="abs abs-text typo-14" style={{ left: 16, top: 16, width: 243, height: 19 }}>Amazon</div>
            <div className="abs abs-text typo-15" style={{ left: 16, top: 43, width: 168.532, height: 17 }}>Mon 11.05.2021</div>
            <div className="abs abs-text typo-14" style={{ left: 275, top: 23.5, width: 52, height: 19 }}>$19.30</div>
          </div>

          <div className="abs style-7" style={{ left: 0, top: 309, width: 327, height: 76 }}>
            <div className="abs abs-text typo-14" style={{ left: 16, top: 16, width: 239, height: 19 }}>Udemy</div>
            <div className="abs abs-text typo-15" style={{ left: 16, top: 43, width: 165.758, height: 17 }}>Mon 11.03.2021</div>
            <div className="abs abs-text typo-14" style={{ left: 271, top: 23.5, width: 56, height: 19 }}>$20.00</div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="abs" style={{ left: 0, top: 730, width: 375, height: 82 }}>
          <div className="abs bottom-nav-bg" style={{ left: 0, top: 0, width: 375, height: 82 }} />
          <div className="abs" style={{ left: 46, top: 25, width: 20.25, height: 15.75, background: '#bbb', borderRadius: 2 }} />
          <div className="abs style-6-bg" style={{ left: 128, top: 24, width: 17.985, height: 18.01, borderRadius: 2 }} />
          <div className="abs style-6-bg" style={{ left: 220, top: 24, width: 20.25, height: 18, borderRadius: 2 }} />
          <div className="abs style-6-bg" style={{ left: 312, top: 34, width: 14.25, height: 3, borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

export default FileCover;
