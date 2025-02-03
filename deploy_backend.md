# 🔗 Conectando-se à Instância EC2

## 1️⃣ Acessando a Instância via SSH

1. No painel **EC2**, localize a instância na lista.
2. Copie o **Endereço IP Público** ou **DNS Público**.
3. Conecte-se utilizando **SSH**:
   
   ```sh
   ssh -i "seu-arquivo.pem" ec2-user@seu-endereco-ip
   ```
   
   - Substitua `seu-arquivo.pem` pelo nome do seu arquivo de chave.
   - Substitua `seu-endereco-ip` pelo endereço IP da instância.

---

## 2️⃣ Configurações Iniciais

1. **Atualize os pacotes disponíveis**:
   ```sh
   sudo apt update && sudo apt upgrade -y
   ```
2. **Instale o Node.js e o Git**:
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   sudo apt install git -y
   ```
3. **Clone o repositório e ajuste o ambiente**:
   ```sh
   git clone https://github.com/cauewcampos/teste.git
   cd teste/stackovershop-api/prisma
   nano schema.prisma
   ```

4. **Modifique o arquivo de variáveis de ambiente**:
   ```sh
   nano /home/ubuntu/teste/stackovershop-api/.env
   ```
   - Adicione:
     ```sh
     PORT=5000
     ```
   - Configure:
     ```sh
     url = env("MONGO_URI=mongodb://IPDAINSTANCIA:27017/nomeSeuBanco?replicaSet=rs0")
     ```

5. **Ajuste o servidor**:
   ```sh
   cd ../src
   nano server.ts
   ```
6. **Configure o TypeScript**:
   ```sh
   nano tsconfig.json
   ```
   - Modifique:
     ```json
     {
       "rootDir": "./src",
       "outDir": "./dist",
       "include": ["src/**/*.ts"],
       "exclude": ["node_modules"]
     }
     ```
7. **Atualize `package.json` e adicione em `scripts`**:
   ```json
   "build": "tsc"
   ```

---

## 3️⃣ Instalação e Configuração do PM2

1. **Baixe e instale o PM2**:
   ```sh
   sudo npm i -g pm2
   ```
2. **Inicie o servidor com PM2**:
   ```sh
   pm2 start server.js --name "escolhaseunome"
   pm2 save
   ```

---

## 4️⃣ Configuração do Firewall

1. **Liberar a porta 5000**:
   ```sh
   sudo ufw allow 5000
   sudo ufw reload
   ```

---

## 5️⃣ Inicialização do Servidor

1. **Inicie o servidor e finalize as configurações**:
    ```sh
    pm2 start 0
    npm run build
    ```

