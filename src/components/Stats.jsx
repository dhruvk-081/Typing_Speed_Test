import React, { useEffect }  from "react";
import Graph from "./Graph";
import { auth, db } from "../FirebaseConfig";
import { toast } from "react-toastify";

const Stats = ({ wpm, accuracy, correctChars, incorrectChars, missedChars, extraChars, graphData, resetTest }) => {
  
  let timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  const pushDataToDB = () => {

    if(isNaN(accuracy)){
      toast.error('Invalid Test', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const resultsRef = db.collection("Results");
    const { uid } = auth.currentUser;
    resultsRef
      .add({
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
        userId: uid,
      })
      .then((res) => {
        toast.success("Data saved to db", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }).catch((err)=>{
        toast.error('Not able to save result', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  };

  useEffect(()=>{
    if(auth.currentUser){
      pushDataToDB();
    }
    else{
      toast.warning('Login to save results ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [])

  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="title outer-border">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title outer-border">Accuracy</div>
        <div className="subtitle">{accuracy}</div>
        <div className="title outer-border">Characters</div>
        <div className="subtitle">
          {correctChars}/{incorrectChars}/{missedChars}/{extraChars}{" "}
        </div>

        <div onClick={resetTest} className="restart">Restart</div>
      </div>
      <div className="right-stats">
        {/* graph will go here */}
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;
