import { useParams } from "react-router-dom";

// CSS Imports
import "../CSS/Homepage.css";

function Homepage() {
  const { role } = useParams();

  function capitalize(str) {
    if (!str) return ""; // Handle empty string case
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <div className="homepage-intro-container">
        <p className="homepage-intro-text">Hello: {capitalize(role)}</p>
      </div>

      <div className="homepage-col-container">
        <div className="homepage-col-1">
          {/* c1 r1 */}
          <div className="homepage-col-1-row-1">
            <div className="homepage-welcome">
              <p>Welcome</p>
            </div>
          </div>

          {/* c1 r2 */}
          <div className="homepage-col-1-row-2">
            <div className="homepage-row-col">
              <div className="homepage-pay">
                <p>Pay</p>
              </div>
            </div>
            <div className="homepage-row-col">
              <div className="homepage-my-time-off">
                <p>My Time off</p>
              </div>
            </div>
          </div>

          {/* c1 r3 */}
          <div className="homepage-col-1-row-3">
            <div className="homepage-row-col">
              <div className="homepage-updates-reminders">
                <p>Updates & Reminders</p>
              </div>
            </div>
            <div className="homepage-row-col"></div>
          </div>
        </div>
        <div className="homepage-col-2"></div>
      </div>
    </>
  );
}

export default Homepage;
