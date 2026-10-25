
from flask import Flask, jsonify, send_from_directory, request
from pathlib import Path
import json

app = Flask(__name__)

# File used to store assessment records
ASSESSMENTS_FILE = Path(__file__).with_name("assessments.json")


# Display the existing PlaceReady website
@app.route("/")
def home():
    return send_from_directory(".", "index.html")


# Serve the website stylesheet
@app.route("/style.css")
def style():
    return send_from_directory(".", "style.css")


# Serve the website JavaScript
@app.route("/script.js")
def script():
    return send_from_directory(".", "script.js")


# Check whether the backend is running
@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "project": "PlaceReady"
    })


# Test the Python API connection
@app.route("/api/status")
def api_status():
    return jsonify({
        "project": "PlaceReady",
        "message": "Python backend connected!",
        "status": "success"
    })


# Receive and permanently store assessment results
@app.route("/api/assessment", methods=["POST"])
def save_assessment():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "status": "error",
            "message": "Invalid assessment data."
        }), 400

    required_fields = [
        "skill", "correct", "total", "percentage", "date"
    ]

    if not all(field in data for field in required_fields):
        return jsonify({
            "status": "error",
            "message": "Missing assessment fields."
        }), 400

    # Validate score values before saving
    try:
        correct = data["correct"]
        total = data["total"]
        percentage = data["percentage"]

        if (
            isinstance(correct, bool)
            or isinstance(total, bool)
            or isinstance(percentage, bool)
            or not isinstance(correct, int)
            or not isinstance(total, int)
            or not isinstance(percentage, int)
            or total <= 0
            or correct < 0
            or correct > total
            or percentage != round(correct / total * 100)
        ):
            return jsonify({
                "status": "error",
                "message": "Invalid assessment scores."
            }), 400

    except (TypeError, ZeroDivisionError):
        return jsonify({
            "status": "error",
            "message": "Invalid assessment scores."
        }), 400

    try:
        if ASSESSMENTS_FILE.exists():
            with open(ASSESSMENTS_FILE, "r", encoding="utf-8") as file:
                records = json.load(file)

            if not isinstance(records, list):
                return jsonify({
                    "status": "error",
                    "message": "Assessment storage file has an invalid format."
                }), 500
        else:
            records = []

        records.append(data)

        with open(ASSESSMENTS_FILE, "w", encoding="utf-8") as file:
            json.dump(records, file, indent=4)

        return jsonify({
            "status": "success",
            "message": "Assessment saved successfully in Python!",
            "saved_count": len(records)
        })

    except (OSError, json.JSONDecodeError):
        return jsonify({
            "status": "error",
            "message": "Could not save assessment."
        }), 500


# Read all permanently saved assessment results
@app.route("/api/assessments", methods=["GET"])
def get_assessments():
    try:
        if ASSESSMENTS_FILE.exists():
            with open(ASSESSMENTS_FILE, "r", encoding="utf-8") as file:
                records = json.load(file)

            if not isinstance(records, list):
                return jsonify({
                    "status": "error",
                    "message": "Assessment storage file has an invalid format."
                }), 500
        else:
            records = []

        return jsonify({
            "status": "success",
            "assessments": records,
            "count": len(records)
        })

    except (OSError, json.JSONDecodeError):
        return jsonify({
            "status": "error",
            "message": "Could not read assessment records."
        }), 500

if __name__ == "__main__":
    app.run(debug=True)
