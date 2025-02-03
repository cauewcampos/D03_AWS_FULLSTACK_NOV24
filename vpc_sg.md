# 🏗️ Criação da VPC

### 1️⃣ Abra o link do Console e crie sua VPC.

<p align="center">
  <img src="/assets/image.png" width="450"/>
</p>

### 2️⃣ Selecione **"VPC e muito mais"**.

<p align="center">
  <img src="/assets/image-1.png" width="450"/>
</p>

### 3️⃣ Escolha um nome para sua etiqueta.

<p align="center">
  <img src="/assets/image-2.png" width="450"/>
</p>

### 4️⃣ Vá até o final e crie sua VPC.

<p align="center">
  <img src="/assets/image-3.png" width="450"/>
</p>

---

# 🔒 Criação do Security Group

### 1️⃣ Abra o painel de grupos de segurança no console AWS.

### 2️⃣ Preencha as informações iniciais necessárias:
   - **Nome** do seu Security Group.
   - **Descrição** breve.
   - **Selecione a VPC** que você acabou de criar.

<p align="center">
  <img src="/assets/image-4.png" width="450"/>
</p>

### 3️⃣ Configuração das **Regras de Entrada e Saída**

#### ➡️ Regras de Entrada:

   - **Entrada SSH**:
     - Adicione uma regra: **Selecione SSH**
     - Defina a Origem: **Qualquer IPv4**
   
   - **Entrada TCP**:
     - Adicione três regras: **Selecione TCP**
     - Informe uma porta: **8080 / 5000 / 27017**
     - Defina a Origem: **Qualquer IPv4**

Sua tela deverá ficar assim:

<p align="center">
  <img src="/assets/image-6.png" width="450"/>
</p>

### 4️⃣ Clique em **"Criar grupo de segurança"**.

<p align="center">
  <img src="/assets/image-7.png" width="450"/>
</p>


## ✅ Conclusão

O vpc e o security group estão criados. Agora podem ser usados na aplicação!