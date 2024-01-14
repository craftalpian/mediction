# MEDICTION: Medical Data Integration
MEDICTION adalah platform integrasi data medis, dengan teknologi blockchain untuk menyimpan data pasien secara terdesentralisasi sehingga data lebih aman dan pasien memiliki kendali penuh atas data nya sendiri.

## Background
Latar belakang yang kami usung adalah lamanya transfer data antar rumah sakit bagi pasien gawat darurat yang memerlukan rujuk. Hal ini berakibat fatal bagi pasien hingga resiko meninggal dunia. Dengan ICP yang terintegrasi di setiap rumah sakit dapat membuat transfer data menjadi lebih cepat.

## Requirements
- [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/quickstart)
- [Node.js](https://nodejs.org/en/)

## Installation
Clone this repository:

```bash
git clone https://github.com/craftalpian/mediction.git
cd mediction
```
`dfx` The DFINITY command-line execution environment is the primary tool for creating, deploying, and managing the dapps you develop for the IC.. If you don't already have it installed:
```bash
npm install dfx
```
Run the `dfx` in your local:
```bash
dfx start --background --clean
```
And then deploy the canister:
```bash
dfx deploy
```
## Structures
```bash
├── app                     // frontend directory
├── backend                 // backend directory
│   ├── database.mo
│   ├── main.mo
│   └── types.mo
├── dfx.json                // settings for dfx deployment
├── dfx.webpack.config.js
├── next.config.js          // settings for next js
├── next-env.d.ts
├── node_modules
├── out                     // contain static file deploy to canister
├── package.json
├── package-lock.json
├── postcss.config.js
├── public                  // contain assets
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```

## Features

### Hospital
### Doctor
### Patient