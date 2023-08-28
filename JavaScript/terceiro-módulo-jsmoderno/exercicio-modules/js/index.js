import calculate from "./calculate.js"
import {darkTheme} from "./darkTheme.js"
import clickKey from "./clickEvent.js"
import { clear,backspace } from "./clear.js"
import { copyResult } from "./copyResult.js"
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(clickKey)

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", backspace)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("themeSwitcher").addEventListener("click", darkTheme)

document.getElementById("copyToClipboard").addEventListener("click", copyResult)

