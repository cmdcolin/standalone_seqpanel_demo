import React from "react";
import SequencePanel from "@jbrowse/core/BaseFeatureWidget/SequencePanel";

export default function App() {
  return (
    <div className="App">
      <SequencePanel sequence="ACGT" feature={{ start: 0, end: 100 }} />
    </div>
  );
}
