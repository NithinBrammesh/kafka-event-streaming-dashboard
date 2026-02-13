# Real-Time Order Streaming Platform

A real-time event-driven data streaming platform built using Apache Kafka, Node-RED, Docker, and React.

This project demonstrates how modern streaming architectures process live data events asynchronously, expose APIs, and provide real-time analytics dashboards.

---

## 🚀 Project Overview

The system ingests order data from CSV/local sources, streams events through Kafka topics, processes data using Node-RED workflows and ksqlDB, and visualizes live insights via a React dashboard.

The goal of this project is to simulate a production-style event-driven backend system with real-time processing and DevOps-oriented deployment.

### Key Objectives

- Implement event-driven architecture
- Process real-time streaming data
- Visualize analytics in real time
- Demonstrate asynchronous system design
- Use containerized infrastructure

---

## 🏗 Architecture

### Data Flow

Producer → Kafka Topic → ksqlDB Processing → Node-RED Consumer → WebSocket/API → React Dashboard

### Core Components

- **Apache Kafka** – distributed event streaming platform
- **ksqlDB** – stream processing and aggregation
- **Node-RED** – workflow orchestration and API layer
- **React** – real-time dashboard frontend
- **Docker** – containerized local environment
- **Swagger/OpenAPI** – API contract and documentation

---

## ⚙️ Tech Stack

### Backend & Streaming

- Apache Kafka
- ksqlDB
- Node-RED
- WebSocket streaming

### Frontend

- React.js
- Chart visualizations

### DevOps

- Docker
- Docker Compose

### API Documentation

- OpenAPI / Swagger

---

## 📁 Project Structure
