import { Recycle, Leaf, AlertTriangle } from "lucide-react";
import { wasteInfo } from "../data/wasteInfo";

function PredictionCard({ result }) {
  if (!result) {
    return (
      <div className="prediction empty">
        <h2>🤖 AI Prediction</h2>
        <p>Upload image to analyse waste.</p>
      </div>
    );
  }

  // Backend class
  const rawClass = result.class || result.predicted_class || "";

  // Remove spaces
  const wasteClass = rawClass.trim();

  // Debug
  console.log("Result :", result);
  console.log("Waste Class :", wasteClass);
  console.log("Waste Info :", wasteInfo[wasteClass]);

  const info =
    wasteInfo[wasteClass] || {
      title: "Unknown Waste",
      recommendation: "Follow your local waste disposal guidelines.",
      steps: [],
      impact: {
        co2: "N/A",
        energy: "N/A",
        environment: "N/A",
      },
    };

  const confidence =
    result.confidence > 1
      ? result.confidence
      : result.confidence * 100;

  function getIcon() {
    if (wasteClass === "Hazardous")
      return <AlertTriangle size={60} />;

    if (wasteClass === "Organic")
      return <Leaf size={60} />;

    return <Recycle size={60} />;
  }

  function getColor() {
    if (wasteClass === "Hazardous")
      return "#ef4444";

    if (wasteClass === "Organic")
      return "#f97316";

    return "#22c55e";
  }

  return (
    <div className="prediction">

      <h2>🤖 AI Analysis Complete</h2>

      <div className="prediction-result">

        <div
          className="result-icon"
          style={{ color: getColor() }}
        >
          {getIcon()}
        </div>

        <h1 style={{ color: getColor() }}>
          {wasteClass}
        </h1>

      </div>

      <div className="confidence-box">

        <p>Confidence</p>

        <div className="confidence-bar">

          <div
            style={{
              width: `${confidence}%`,
              background: getColor(),
            }}
          />

        </div>

        <h3>{confidence.toFixed(2)}%</h3>

      </div>

      <div className="recommendation">

        <h3>💡 AI Disposal Assistant</h3>

        <h4>{info.title}</h4>

        <p>{info.recommendation}</p>

        <ul>

          {info.steps.map((step, index) => (

            <li key={index}>
              ✅ {step}
            </li>

          ))}

        </ul>

      </div>

      <div className="impact-card">

        <h3>🌍 Environmental Impact</h3>

        <div className="impact-grid">

          <div className="impact-item">
            <h4>🌱 CO₂ Impact</h4>
            <p>{info.impact.co2}</p>
          </div>

          <div className="impact-item">
            <h4>⚡ Energy</h4>
            <p>{info.impact.energy}</p>
          </div>

          <div className="impact-item">
            <h4>🌳 Environment</h4>
            <p>{info.impact.environment}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default PredictionCard;