
"use strict";

// ========================================
// 1. QUESTION BANK: 10 QUESTIONS PER SKILL
// ========================================

const questionBank = {
    Coding: [
        {
            question: "Which data type stores a whole number in C?",
            options: ["float", "int", "char", "void"],
            answer: 1
        },
        {
            question: "Which loop executes while a condition is true?",
            options: ["if", "switch", "while", "break"],
            answer: 2
        },
        {
            question: "Which symbol ends a statement in C?",
            options: [".", ":", ";", ","],
            answer: 2
        },
        {
            question: "Which function is commonly used to display output in C?",
            options: ["scanf()", "printf()", "input()", "display()"],
            answer: 1
        },
        {
            question: "Which operator checks equality in C?",
            options: ["=", "==", "!=", "++"],
            answer: 1
        },
        {
            question: "Array indexing in C starts from which number?",
            options: ["0", "1", "-1", "2"],
            answer: 0
        },
        {
            question: "Which keyword returns a value from a function?",
            options: ["break", "continue", "return", "void"],
            answer: 2
        },
        {
            question: "Which symbol is used to access the address of a variable?",
            options: ["*", "&", "%", "#"],
            answer: 1
        },
        {
            question: "Which loop is guaranteed to execute at least once?",
            options: ["for", "while", "do-while", "nested for"],
            answer: 2
        },
        {
            question: "Which is a valid single-line comment in C?",
            options: ["<!-- -->", "// comment", "** comment", "## comment"],
            answer: 1
        }
    ],

    SQL: [
        {
            question: "Which SQL command retrieves data?",
            options: ["GET", "SELECT", "OPEN", "FETCHALL"],
            answer: 1
        },
        {
            question: "Which clause filters rows?",
            options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
            answer: 2
        },
        {
            question: "Which command adds a new row?",
            options: ["INSERT INTO", "ADD ROW", "UPDATE", "ALTER"],
            answer: 0
        },
        {
            question: "Which function counts rows?",
            options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
            answer: 2
        },
        {
            question: "Which clause sorts query results?",
            options: ["SORT", "ORDER BY", "ARRANGE", "GROUP BY"],
            answer: 1
        },
        {
            question: "Which command changes existing row values?",
            options: ["CHANGE", "MODIFY ROW", "UPDATE", "REPLACE TABLE"],
            answer: 2
        },
        {
            question: "Which constraint uniquely identifies each row?",
            options: ["DEFAULT", "PRIMARY KEY", "CHECK", "NULL"],
            answer: 1
        },
        {
            question: "Which operator matches a pattern?",
            options: ["LIKE", "MATCHES", "EQUALS", "PATTERN"],
            answer: 0
        },
        {
            question: "Which command removes a table definition?",
            options: ["DELETE", "REMOVE", "DROP TABLE", "CLEAR"],
            answer: 2
        },
        {
            question: "Which keyword removes duplicate rows from results?",
            options: ["UNIQUE ROWS", "DISTINCT", "SINGLE", "NO DUPLICATE"],
            answer: 1
        }
    ],

    Aptitude: [
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            answer: 2
        },
        {
            question: "What is the average of 4, 6 and 8?",
            options: ["5", "6", "7", "8"],
            answer: 1
        },
        {
            question: "What comes next: 2, 4, 6, 8, ...?",
            options: ["9", "10", "11", "12"],
            answer: 1
        },
        {
            question: "If a pen costs ₹10, what is the cost of 5 pens?",
            options: ["₹15", "₹40", "₹50", "₹60"],
            answer: 2
        },
        {
            question: "What is 12 × 12?",
            options: ["124", "144", "132", "154"],
            answer: 1
        },
        {
            question: "A person travels 60 km in 2 hours. What is the speed?",
            options: ["20 km/h", "25 km/h", "30 km/h", "60 km/h"],
            answer: 2
        },
        {
            question: "What is 3/4 expressed as a percentage?",
            options: ["25%", "50%", "75%", "80%"],
            answer: 2
        },
        {
            question: "What is the next number: 5, 10, 15, 20, ...?",
            options: ["22", "24", "25", "30"],
            answer: 2
        },
        {
            question: "If x + 7 = 12, what is x?",
            options: ["3", "4", "5", "6"],
            answer: 2
        },
        {
            question: "What is the simple interest on ₹1000 at 10% per year for 1 year?",
            options: ["₹10", "₹50", "₹100", "₹200"],
            answer: 2
        }
    ],

    Communication: [
        {
            question: "Which is the most professional email greeting?",
            options: ["Hey dude", "Dear Hiring Manager", "Yo", "Hi bro"],
            answer: 1
        },
        {
            question: "What should you do when someone is speaking?",
            options: ["Interrupt", "Ignore them", "Listen carefully", "Look away"],
            answer: 2
        },
        {
            question: "Which is best for a group discussion?",
            options: [
                "Speak over everyone",
                "Never speak",
                "Listen and share relevant points",
                "Criticize everyone"
            ],
            answer: 2
        },
        {
            question: "What should a good resume contain?",
            options: [
                "False achievements",
                "Relevant skills and education",
                "Unrelated personal stories",
                "Only hobbies"
            ],
            answer: 1
        },
        {
            question: "How should you respond when you do not know an interview answer?",
            options: [
                "Make up facts",
                "Argue with the interviewer",
                "Be honest and explain your approach",
                "Leave immediately"
            ],
            answer: 2
        },
        {
            question: "Which improves spoken English?",
            options: [
                "Avoiding conversations",
                "Regular speaking practice",
                "Memorizing without speaking",
                "Never asking questions"
            ],
            answer: 1
        },
        {
            question: "What is active listening?",
            options: [
                "Planning your reply without listening",
                "Changing the topic",
                "Paying attention and understanding",
                "Speaking continuously"
            ],
            answer: 2
        },
        {
            question: "Which sentence is grammatically correct?",
            options: [
                "She go to college.",
                "She goes to college.",
                "She going college.",
                "She gone college."
            ],
            answer: 1
        },
        {
            question: "What is a good interview introduction?",
            options: [
                "A clear summary of education and relevant skills",
                "A list of complaints",
                "An unrelated long story",
                "No introduction"
            ],
            answer: 0
        },
        {
            question: "What should you do after an interview?",
            options: [
                "Send repeated messages",
                "Be rude",
                "Follow up politely when appropriate",
                "Demand an immediate result"
            ],
            answer: 2
        }
    ]
};

// ========================================
// 2. STORAGE AND APP DATA
// ========================================

const STORAGE_KEYS = {
    skills: "placeready_skills_v1",
    tasks: "placeready_tasks_v1",
    history: "placeready_assessment_history_v1"
};

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        console.error("Could not read saved data:", error);
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Could not save data:", error);
        alert("Your browser could not save this data. Check browser storage settings.");
        return false;
    }
}

let assessmentHistory = readStorage(STORAGE_KEYS.history, []);
let tasks = readStorage(STORAGE_KEYS.tasks, []);
let skillScores = readStorage(STORAGE_KEYS.skills, {});

if (!Array.isArray(assessmentHistory)) assessmentHistory = [];
if (!Array.isArray(tasks)) tasks = [];
if (!skillScores || typeof skillScores !== "object" || Array.isArray(skillScores)) {
    skillScores = {};
}

// Recover each skill's latest score from assessment history.
Object.keys(questionBank).forEach(function (skill) {
    const latest = assessmentHistory.find(function (attempt) {
        return attempt.skill === skill;
    });

    if (latest && typeof latest.percentage === "number") {
        skillScores[skill] = latest.percentage;
    }
});

function saveAllData() {
    saveStorage(STORAGE_KEYS.history, assessmentHistory);
    saveStorage(STORAGE_KEYS.tasks, tasks);
    saveStorage(STORAGE_KEYS.skills, skillScores);
}

// ========================================
// 3. HTML ELEMENTS
// ========================================

const skillSelect = document.getElementById("skillSelect");
const assessmentForm = document.getElementById("assessmentForm");
const questionsContainer = document.getElementById("questionsContainer");
const assessmentResult = document.getElementById("assessmentResult");
const historyBody = document.getElementById("historyBody");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// ========================================
// 4. RENDER ASSESSMENT QUESTIONS
// ========================================

function renderQuestions() {
    const skill = skillSelect.value;
    const questions = questionBank[skill];

    questionsContainer.innerHTML = "";
    assessmentResult.textContent = "";

    questions.forEach(function (item, index) {
        const fieldset = document.createElement("fieldset");
        fieldset.className = "question-card";

        const legend = document.createElement("legend");
        legend.textContent = (index + 1) + ". " + item.question;
        fieldset.appendChild(legend);

        item.options.forEach(function (option, optionIndex) {
            const label = document.createElement("label");
            label.className = "option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "question" + index;
            radio.value = optionIndex;
            radio.required = true;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            fieldset.appendChild(label);
        });

        questionsContainer.appendChild(fieldset);
    });
}

// ========================================
// 5. SUBMIT ASSESSMENT AND SAVE HISTORY
// ========================================

assessmentForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const skill = skillSelect.value;
    const questions = questionBank[skill];
    let correct = 0;

    questions.forEach(function (question, index) {
        const selected = assessmentForm.querySelector(
            'input[name="question' + index + '"]:checked'
        );

        if (selected && Number(selected.value) === question.answer) {
            correct++;
        }
    });

    const percentage = Math.round((correct / questions.length) * 100);

    const attempt = {
        id: Date.now().toString() + "-" +
            Math.random().toString(36).slice(2, 8),
        skill: skill,
        correct: correct,
        total: questions.length,
        percentage: percentage,
        date: new Date().toISOString()
    };

    // Update the website immediately.
    assessmentHistory.unshift(attempt);
    skillScores[skill] = percentage;

    saveAllData();

    assessmentResult.textContent =
        "Assessment completed! Score: " + correct + "/" +
        questions.length + " (" + percentage + "%).";

    renderHistory();
    updateDashboard();

    // Send the new assessment to Python Flask.
    try {
        const response = await fetch("/api/assessment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attempt)
        });

        const data = await response.json();

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Assessment could not be saved in Python."
            );
        }

        console.log("Python received assessment:", data);
    } catch (error) {
        console.error("Could not send assessment to Python:", error);

        assessmentResult.textContent +=
            " Warning: Python could not save this result. " +
            "Check that the Flask server is running.";
    }
});

// ========================================
// 6. ASSESSMENT HISTORY
// ========================================

function renderHistory() {
    historyBody.innerHTML = "";

    const latest = assessmentHistory[0];

    const best = assessmentHistory.reduce(function (maximum, attempt) {
        return Math.max(maximum, Number(attempt.percentage) || 0);
    }, 0);

    document.getElementById("historyLatest").textContent =
        latest
            ? latest.percentage + "% (" + latest.skill + ")"
            : "No attempts yet";

    document.getElementById("historyBest").textContent =
        assessmentHistory.length ? best + "%" : "No attempts yet";

    document.getElementById("historyCount").textContent =
        assessmentHistory.length;

    if (assessmentHistory.length === 0) {
        const row = historyBody.insertRow();
        const cell = row.insertCell();

        cell.colSpan = 4;
        cell.textContent = "No assessments completed yet.";
        return;
    }

    assessmentHistory.forEach(function (attempt) {
        const row = historyBody.insertRow();

        row.insertCell().textContent = attempt.skill;
        row.insertCell().textContent = attempt.percentage + "%";
        row.insertCell().textContent =
            attempt.correct + "/" + attempt.total;

        const dateCell = row.insertCell();
        const parsedDate = new Date(attempt.date);

        dateCell.textContent = Number.isNaN(parsedDate.getTime())
            ? "Date unavailable"
            : parsedDate.toLocaleString();
    });
}

clearHistoryBtn.addEventListener("click", function () {
    if (assessmentHistory.length === 0) {
        alert("There is no assessment history to clear.");
        return;
    }

    const confirmed = confirm(
        "Clear the browser's assessment history and saved skill scores? " +
        "Python's saved assessment records will remain in assessments.json."
    );

    if (!confirmed) return;

    assessmentHistory = [];
    skillScores = {};

    saveAllData();
    renderHistory();
    updateDashboard();
    assessmentResult.textContent = "";
});

// ========================================
// 7. DASHBOARD AND RECOMMENDATIONS
// ========================================

function updateDashboard() {
    document.getElementById("totalAttempts").textContent =
        assessmentHistory.length;

    const latestBySkill = {};

    // History is newest-first, so the first occurrence is the latest.
    assessmentHistory.forEach(function (attempt) {
        if (!(attempt.skill in latestBySkill)) {
            latestBySkill[attempt.skill] = Number(attempt.percentage) || 0;
        }
    });

    const latestScores = Object.values(latestBySkill);

    const latestAverage = latestScores.length
        ? Math.round(
            latestScores.reduce(function (sum, score) {
                return sum + score;
            }, 0) / latestScores.length
        )
        : 0;

    const bestAverage = assessmentHistory.length
        ? Math.max.apply(
            null,
            assessmentHistory.map(function (attempt) {
                return Number(attempt.percentage) || 0;
            })
        )
        : 0;

    document.getElementById("latestAverage").textContent =
        latestScores.length ? latestAverage + "%" : "0%";

    document.getElementById("bestAverage").textContent =
        assessmentHistory.length ? bestAverage + "%" : "0%";

    const overview = document.getElementById("skillOverview");
    overview.innerHTML = "";

    Object.keys(questionBank).forEach(function (skill) {
        const score = Number(skillScores[skill]) || 0;

        const row = document.createElement("div");
        row.className = "skill-row";

        const name = document.createElement("span");
        name.textContent = skill;

        const track = document.createElement("div");
        track.className = "progress-track";

        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = Math.min(100, Math.max(0, score)) + "%";

        track.appendChild(fill);

        const value = document.createElement("strong");
        value.textContent = score + "%";

        row.append(name, track, value);
        overview.appendChild(row);
    });

    const recommendations = document.getElementById("recommendations");
    recommendations.innerHTML = "";

    const attemptedSkills = Object.keys(latestBySkill);

    if (attemptedSkills.length === 0) {
        recommendations.textContent =
            "Start your first assessment to receive personalized practice recommendations.";
        return;
    }

    const weakest = attemptedSkills
        .map(function (skill) {
            return {
                skill: skill,
                score: latestBySkill[skill]
            };
        })
        .sort(function (a, b) {
            return a.score - b.score;
        });

    
weakest.forEach(function (item) {
    const message = document.createElement("p");
    message.className = "recommendation";

    let advice = "";

    if (item.skill === "Coding") {
        if (item.score < 50) {
            advice = "Revise variables, data types, loops, and conditional statements. Practise basic programs daily.";
        } else if (item.score < 80) {
            advice = "Practise arrays, functions, strings, and problem-solving questions.";
        } else {
            advice = "Try advanced coding problems, data structures, and timed programming challenges.";
        }
    } else if (item.skill === "SQL") {
        if (item.score < 50) {
            advice = "Learn SELECT, WHERE, ORDER BY, and basic SQL commands. Practise simple queries daily.";
        } else if (item.score < 80) {
            advice = "Practise JOINs, GROUP BY, aggregate functions, and subqueries.";
        } else {
            advice = "Challenge yourself with complex joins, nested queries, and database problems.";
        }
    } else if (item.skill === "Aptitude") {
        if (item.score < 50) {
            advice = "Revise percentages, ratios, averages, and basic arithmetic.";
        } else if (item.score < 80) {
            advice = "Practise time and work, speed and distance, and logical reasoning.";
        } else {
            advice = "Solve timed aptitude tests and advanced quantitative reasoning questions.";
        }
    } else if (item.skill === "Communication") {
        if (item.score < 50) {
            advice = "Practise basic grammar, vocabulary, and forming clear sentences.";
        } else if (item.score < 80) {
            advice = "Work on interview answers, reading comprehension, and spoken English.";
        } else {
            advice = "Practise mock interviews, group discussions, and professional communication.";
        }
    } else {
        advice = "Review your mistakes and practise more questions.";
    }

    message.textContent =
        item.skill + ": " + advice +
        " Latest score: " + item.score + "%.";

    recommendations.appendChild(message);
});

const unattempted = Object.keys(questionBank).filter(function (skill) {
    return !attemptedSkills.includes(skill);
});

if (unattempted.length) {
    const note = document.createElement("p");
    note.className = "recommendation";
    note.textContent = "Still to assess: " + unattempted.join(", ") + ".";
    recommendations.appendChild(note);
}

}

// ========================================
// 8. PRACTICE TASKS
// ========================================

function renderTasks() {
    taskList.innerHTML = "";

    const completed = tasks.filter(function (task) {
        return task.completed;
    }).length;

    document.getElementById("taskCount").textContent =
        tasks.length + " tasks · " + completed + " completed";

    if (tasks.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-message";
        empty.textContent =
            "No tasks yet. Add your first practice task above.";

        taskList.appendChild(empty);
        return;
    }

    tasks.forEach(function (task) {
        const row = document.createElement("div");
        row.className =
            "task-item" + (task.completed ? " completed" : "");

        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            saveStorage(STORAGE_KEYS.tasks, tasks);
            renderTasks();
        });

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        label.append(checkbox, taskText);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-task";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            saveStorage(STORAGE_KEYS.tasks, tasks);
            renderTasks();
        });

        row.append(label, deleteButton);
        taskList.appendChild(row);
    });
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    if (!text) return;

    tasks.unshift({
        id: Date.now().toString() + "-" +
            Math.random().toString(36).slice(2, 8),
        text: text,
        completed: false
    });

    saveStorage(STORAGE_KEYS.tasks, tasks);

    taskInput.value = "";
    renderTasks();
});

// ========================================
// 9. LOAD ASSESSMENTS FROM PYTHON
// ========================================

async function loadHistoryFromPython() {
    try {
        const response = await fetch("/api/assessments");

        if (!response.ok) {
            throw new Error(
                "Could not load assessments from Python. HTTP " +
                response.status
            );
        }

        const data = await response.json();

        if (
            data.status !== "success" ||
            !Array.isArray(data.assessments)
        ) {
            throw new Error("Invalid assessment response from Python.");
        }

        // Python records are appended, so sort newest-first.
        assessmentHistory = data.assessments.slice().sort(function (a, b) {
            return new Date(b.date).getTime() -
                new Date(a.date).getTime();
        });

        // Rebuild the latest score for every skill.
        skillScores = {};

        assessmentHistory.forEach(function (attempt) {
            if (!(attempt.skill in skillScores)) {
                skillScores[attempt.skill] =
                    Number(attempt.percentage) || 0;
            }
        });

        saveAllData();
        renderHistory();
        updateDashboard();

        console.log(
            "History updated from Python:",
            assessmentHistory
        );
    } catch (error) {
        console.error(
            "Could not load Python assessment history:",
            error
        );
    }
}

// ========================================
// 10. CHECK PYTHON CONNECTION
// ========================================

async function checkPlaceReadyBackend() {
    try {
        const response = await fetch("/api/status");

        if (!response.ok) {
            throw new Error(
                "Backend status request failed: HTTP " + response.status
            );
        }

        const data = await response.json();

        console.log("PlaceReady Python Backend:", data.message);
    } catch (error) {
        console.error("Python backend connection failed:", error);
    }
}

// ========================================
// 11. INITIALIZE APP
// ========================================

skillSelect.addEventListener("change", renderQuestions);

renderQuestions();
renderHistory();
renderTasks();
updateDashboard();

checkPlaceReadyBackend();
loadHistoryFromPython();
