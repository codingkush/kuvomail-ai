# KuvoMail AI 📧

**KuvoMail AI** is a full-stack application that leverages the **Google Gemini AI API** to generate intelligent, professional, and context-aware email replies. Built with a **React** front-end and a **Spring Boot** back-end, it's designed to streamline your communication and save you time.

<br>

## ✨ Features

* **AI-Powered Reply Generation**: Get instant, well-crafted email responses powered by cutting-edge AI.
* **Customizable Tones**: Specify the tone of the reply (professional, casual, or friendly) to match your needs.
* **Clean & Responsive UI**: A modern, user-friendly interface built with **Material-UI** for a great user experience on any device.
* **Full-Stack Architecture**: Demonstrates a robust, end-to-end application with a decoupled front-end and back-end.

***

## ⚙️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, Material-UI, Axios |
| **Backend** | Spring Boot, WebClient, Jackson, Lombok |
| **AI/API** | Google Gemini API |
| **Environment** | `.env` files |

***

## 📂 Repository Structure

```
.
├── email-writer-sb/                 # Spring Boot Backend
│   ├── src/                         # Backend source code
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/email/writer/app/
│   │   │   │       ├── EmailGeneratorController.java  # REST API endpoints
│   │   │   │       ├── EmailGeneratorService.java     # Core business logic
│   │   │   │       └── EmailRequest.java              # Data model
│   │   │   └── resources/
│   │   │       └── application.properties       # Backend configurations
│   └── pom.xml                      # Maven dependencies
│
├── kuvomail-ai/                     # React Frontend
│   ├── src/
│   │   ├── main.jsx                 # Frontend entry point
│   │   ├── App.jsx                  # Main UI component
│   │   └── App.css                  # Custom styling
│   └── package.json                 # Frontend dependencies
│
└── README.md                        # Project overview (this file)


```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm (for frontend)
- Java JDK 17+ (for backend)
- Maven
- Google Gemini AI API Key

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Set up the Backend:
    ```
    cd email-writer-sb
    ```
    - Create an `application.properties` file in `src/main/resources/` or set environment variables:
      ```
      gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=
      gemini.api.key=YOUR_GEMINI_API_KEY
      ```
    - Run the backend:
      ```
      ./mvnw spring-boot:run
      ```

3. Set up the Frontend:
    ```
    cd ../kuvomail-ai
    npm install
    ```
    - Create a `.env` file with:
      ```
      VITE_API_URL=http://localhost:8080
      ```
    - Start the development server:
      ```
      npm run dev
      ```

Visit the address shown in your terminal (usually `http://localhost:5173`) to use the application.

---

## 🤝 Contribution

Feel free to open issues or submit pull requests. All contributions are welcome!

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/codingkush/kuvomail-ai/blob/main/LICENSE) file for details.
