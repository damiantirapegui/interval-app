import "./Loading.css";

export function Loading() {
  return (
    <>
      <div className="loading-page-body">
        <div className="loading-page-container">
          <img src="./images/logo.png" alt="" />
          <p style={{ fontSize: "20px" }}>INTERVAL</p>
          <p className="subheading">For all your timing needs</p>
        </div>
      </div>
    </>
  );
}
