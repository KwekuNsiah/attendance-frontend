import clockIcon from "../assets/clock-blue-half.png";

type SignIn = {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
};

export const CardClockIn = ({ onClick }: SignIn) => {
  function handleClick() {
    onClick = () => onClick();
    console.log("tried to sign in");
  }

  return (
    <div className="cardclockIn">
      <p className="card-clockin-title">Attendance Management System </p>
      <img className="clock-in-card" src={clockIcon} alt="clock icon"></img>
      <p className="card-clock-in-text">Clock In</p>
      <p>
        <button className="clock-In-button">Clock In</button>
      </p>

      <p onClick={handleClick} className="clock-in-sign-up">
        Not you? Switch account
      </p>
    </div>
  );
};
