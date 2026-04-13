# 🧮 Age Calculator App

Aplicação desenvolvida com **React + Vite + Tailwind CSS** que permite calcular a idade exata de um usuário em anos, meses e dias a partir da data de nascimento.

---

## 📸 Preview

![Preview do projeto](./src/assets/design/desktop-completed.jpg)

---

## 🚀 Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## 🎯 Funcionalidades

- ✅ Cálculo de idade completo (anos, meses e dias)
- ✅ Validação de campos obrigatórios
- ✅ Validação de data real (ex: 31/02 não permitido)
- ✅ Validação de data futura
- ✅ Feedback visual de erros
- ✅ Interface responsiva (mobile e desktop)
- ✅ Animação nos números do resultado

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes como:

- Componentização com React
- Gerenciamento de estado com `useState`
- Separação de responsabilidades (utils, components)
- Manipulação de datas com JavaScript
- Validação de formulários
- Layout responsivo com Tailwind CSS
- Controle de animações com `useEffect`

---

## 📂 Estrutura do projeto

src/
│
├── components/
│ ├── AgeForm.jsx
│ ├── DateInput.jsx
│ ├── ButtonSubmit.jsx
│ ├── ResultAge.jsx
│ └── AnimatedNumber.jsx
│
├── utils/
│ ├── calculateAge.js
│ ├── date.js
│ └── validateField.js
│
├── pages/
│ └── Home.jsx
│
└── main.jsx


---

## 🧮 Lógica do cálculo de idade

O cálculo segue os seguintes passos:

1. Diferença inicial entre data atual e data de nascimento  
2. Ajuste de dias negativos:  
   - Adiciona dias do mês anterior  
   - Decrementa o mês  
3. Ajuste de meses negativos:  
   - Soma 12 meses  
   - Decrementa o ano  

---

## 🌐 Deploy

👉 [Acessar projeto online](https://age-calculator-app-nine-rust.vercel.app/)

## Autor

👉 [Mikael Torres](https://portfolio-brown-eta-66.vercel.app/)