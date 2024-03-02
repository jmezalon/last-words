import "./MyWill.scss";

const MyWill = () => {
  const isSecretCorrect = localStorage.getItem("isSecretCorrect");
  if (!isSecretCorrect) {
    window.location.href = "/my-last-wish";
  }

  // TODO: Add back button to the previous page
  return (
    <div className="my-will-container">
      <h1>My Will Page</h1>
    </div>
  );
};

export default MyWill;
