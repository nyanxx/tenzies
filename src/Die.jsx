import React from "react";

export default function Die({ randomNumber, setLockedNumbers, rolled }) {
  //   const randomNumber = Math.floor(Math.random() * 10);

  const [dieNumber, setDieNumber] = React.useState();
  const [isLocked, setIsLocked] = React.useState(false);
  const [lockedNumber, setLockedNumber] = React.useState();

  React.useEffect(() => {
    // console.log("use effect");
    setDieNumber(randomNumber);
  }, [rolled]);

  function lockDie(event) {
    !isLocked &&
      (setLockedNumber(dieNumber),
      console.log(`${dieNumber} is locked!`),
      event.currentTarget.classList.add("locked"),
      setLockedNumbers((prevArr) => [...prevArr, dieNumber]),
      setIsLocked((prevState) => !prevState));
  }

  return (
    <div onClick={lockDie} className="die">
      {!isLocked ? dieNumber : lockedNumber}
    </div>
  );
}
