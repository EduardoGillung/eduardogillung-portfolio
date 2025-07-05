# Configuração do EmailJS para Envio de Emails

## 📧 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no painel

### 2. Configurar Serviço de Email
1. No painel, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure as credenciais
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as variáveis:
   ```
   Nome: {{name}}
   Email: {{email}}
   Telefone: {{phone}}
   Assunto: {{subject}}
   Mensagem: {{message}}
   ```
4. Anote o **Template ID** gerado

### 4. Obter Public Key
1. Vá em "Account" > "API Keys"
2. Copie sua **Public Key**

### 5. Instalar EmailJS no Projeto
```bash
npm install @emailjs/browser
```

### 6. Configurar no Código
Substitua o comentário no arquivo `src/pages/contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// Inicializar EmailJS (adicione no início do componente)
emailjs.init('YOUR_PUBLIC_KEY');

// Substituir a simulação por:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🔧 Configuração Completa

### Variáveis de Ambiente (Opcional)
Crie um arquivo `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Código Atualizado
```typescript
import emailjs from '@emailjs/browser';

// Inicializar
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// No handleSubmit:
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

## 📊 Limites Gratuitos
- **200 emails/mês** no plano gratuito
- **2 templates** de email
- **1 serviço** de email

## 🚀 Alternativas Gratuitas
1. **Formspree** - Formulários simples
2. **Netlify Forms** - Se hospedar no Netlify
3. **Google Forms** - Integração via iframe
4. **Web3Forms** - Sem configuração

## ✅ Teste
1. Configure tudo
2. Preencha o formulário
3. Verifique se o email chega
4. Teste diferentes tipos de mensagem 