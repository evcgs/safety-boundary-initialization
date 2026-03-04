---
name: safety-boundary-initialization
description: "Safety Boundary Initialization - A skill that triggers on first conversation to help user set up safety boundaries, authorization levels, and communication protocols."
---

# Safety Boundary Initialization

一个在第一次对话时触发的技能，帮助用户建立安全边界、授权级别和沟通协议。

---

## Quick Start

### First Time Conversation

When user says:
```
"你好"
"Hello"
"第一次使用"
"First time using"
```

The skill will:
1. **Introduce itself** - Explain the purpose and value
2. **Confirm boundaries** - Show preset boundary list for user to review and modify
3. **Explain result template** - Show result confirmation template and explain usage
4. **Establish communication protocol** - Confirm communication feedback mechanism
5. **Complete confirmation** - Summarize and confirm all settings

---

## Core Principles

### 1. 风险可控内授予最高权限 (Highest Authority Within Controllable Risks)

First lock down risk boundaries, then give AI maximum operational space.

```
低风险 → 自主决策
中风险 → 先做后说
高风险 → 先说后做
```

### 2. 结果导向 (Result-Oriented)

Humans only define quantifiable, verifiable final goals; AI decides how to achieve them.

```
❌ 不好："写一篇好文章"
✅ 好："写一篇3000字的AI Agent行业分析报告，包含5个标杆案例"
```

### 3. 不干涉过程 (Non-Interference in Process)

"Non-interference" is the norm; "interruption" is the exception. "Call me if you have problems" mode.

```
正常执行 → 不干预
遇到问题 → 主动打断
需要决策 → 列出选项
```

---

## Workflow

```
User starts first conversation
    ↓
⚠️ Skill auto-triggers
    ↓
Introduce purpose and value
    ↓
Show authorization boundary list
    ↓
User reviews and modifies
    ↓
Explain result confirmation template
    ↓
Establish communication protocol
    ↓
Summarize and confirm all settings
    ↓
Done! Ready to collaborate
```

---

## Usage

### As OpenClaw Skill

**Scenario 1: First time user**
```
"你好，我是第一次使用"
"Hello, I'm using this for the first time"
```

**Scenario 2: Re-initialize boundaries**
```
"帮我重新设置一下边界"
"Help me re-initialize the boundaries"
```

**Scenario 3: Review current settings**
```
"让我看看当前的边界设置"
"Show me the current boundary settings"
```

---

## Included Files

### 📄 授权边界清单.md (Authorization Boundary List)

Defines operation types and authorization methods by risk level:

- **低风险 (Low Risk)**: Fully autonomous, no confirmation needed
- **中风险 (Medium Risk)**: Autonomous execution, report afterwards
- **高风险 (High Risk)**: Pre-approval required, execute after confirmation
- **永远禁止 (Always Forbidden)**: Absolutely prohibited operations

### 📄 结果确认模板.md (Result Confirmation Template)

Confirmation template used before each task:

- Core task goals (quantifiable, verifiable)
- Safety guardrails (non-negotiable constraints)
- Acceptance criteria (what counts as done)
- Time requirements
- Risk level and authorization

### 📄 沟通反馈机制.md (Communication Feedback Mechanism)

Clarifies when to interrupt, when not to:

- When must interrupt
- When completely hands-off
- Progress reporting conventions
- Special scenario handling

---

## Bundled Resources

### Documents

- **`README.md`** - Project overview and quick start
- **`使用指南.md`** - Detailed usage guide
- **`创建过程说明.md`** - Creation process and background story

### Scripts (`scripts/`)

- **`initialize-boundaries.mjs`** - Initialize boundary files in target workspace

**Features:**
- Copy template boundary files to workspace
- Skip existing files
- Support custom target directory

**Usage:**
```bash
# Using npm
npm run initialize
npm run initialize -- /path/to/workspace

# Direct execution
node scripts/initialize-boundaries.mjs
node scripts/initialize-boundaries.mjs /path/to/workspace
```

---

## Important: Three Core Principles Checklist

**Before using this skill, remember:**

- [ ] **风险可控内授予最高权限** - Lock down risk boundaries first, then give maximum authority
- [ ] **结果导向** - Define quantifiable, verifiable goals
- [ ] **不干涉过程** - Non-interference is the norm, interruption is the exception

---

## Summary

This skill helps you:

1. **Establish clear boundaries** - What AI can do, what it can't do
2. **Set result-oriented goals** - Quantifiable, verifiable task objectives
3. **Build effective communication** - When to ask, when to wait
4. **Increase trust and efficiency** - Clear rules = better collaboration

---

*Skill created: 2026-03-04*
*Last updated: 2026-03-04*
