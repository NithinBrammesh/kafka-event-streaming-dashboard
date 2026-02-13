# Real-Time Order Streaming Platform

A real-time event-driven data streaming system built using Apache Kafka, Node-RED, Docker, and React.

This project demonstrates how streaming architectures process live data events, expose APIs, and provide real-time dashboards for analytics.

---

## 🚀 Project Overview

The platform ingests order data from CSV/local sources, streams events through Kafka, processes them using Node-RED workflows, and displays live insights through a React dashboard.

Key goals:

- Demonstrate event-driven architecture
- Real-time data processing
- Streaming analytics visualization
- Containerized development environment

---

## 🏗 Architecture

Data Flow:

Producer → Kafka Topic → Node-RED Consumer → WebSocket/API → React Dashboard

Main Components:

- Apache Kafka – event streaming platform
- ksqlDB – stream processing
- Node-RED – orchestration and event flow
- React – frontend dashboard
- Docker – containerized setup
- Swagger/OpenAPI – API documentation

---

## ⚙️ Tech Stack

Backend & Streaming:
- Apache Kafka
- ksqlDB
- Node-RED

Frontend:
- React.js

DevOps:
- Docker
- Docker Compose

API Documentation:
- OpenAPI / Swagger

---

## 📁 Project Structure
