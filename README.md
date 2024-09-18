# VANA DATA HERO BOT

## Table Of Contents
- [VANA DATA HERO BOT](#vana-data-hero-bot)
  - [Table Of Contents](#table-of-contents)
  - [VANA DATA HERO Airdrop](#vana-data-hero-airdrop)
  - [Prerequisite](#prerequisite)
  - [BOT FEATURE](#bot-feature)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [Setup Accounts](#setup-accounts)
  - [Session Troubleshoot](#session-troubleshoot)
  - [Query Troubleshoot](#query-troubleshoot)
  - [CONSOLE RUN SCRIPT](#console-run-script)
  - [Join My Telegram Channel](#join-my-telegram-channel)
  - [Note](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## VANA DATA HERO Airdrop

**AIRDROP** : Vana data hero mining

https://t.me/VanaDataHeroBot/VanaDataHero?startapp=5703822759

* Backed by Paradigm, Polychain,
* Dev is from RDAT 

**Faucet** : https://faucet.vana.org/
next RDAT, they create new blockchain called VANA 


## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- VANA DATA HERO Account , Create [Here](https://t.me/VanaDataHeroBot/VanaDataHero?startapp=5703822759) join and claim join reward

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Mining (TAP)
- Auto Complete Missions


## Setup & Configure BOT

### Linux
1. clone project repo 
   ```
   git clone https://github.com/Widiskel/vana-data-hero-bot
   ``` 
   and cd to project dir 
   ```
   cd vana-data-hero-bot
   ```
2. Run 
   ```
   npm install
   ```
3. Run 
   ```
   npm i telegram@2.22.2
   ```
4. Run 
   ```
   mkdir -p accounts
   ```
5. Run 
   ```
   cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp.js config/proxy_list.js
   ```
6. (If You Use Telegram Sessions) To configure the app, run 
   ```
   nano config/config.js
   ```
   and add your telegram app id and hash there.
7. (If You Use Proxy) To configure the Proxy, run 
   ```
   nano config/proxy_list.js
   ``` 
   and add your proxy list there, it currently only support https proxy.
8. to start the app run 
   ```
   npm run start
   ```
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo 
   ```
   git clone https://github.com/Widiskel/vana-data-hero-bot
   ``` 
   and cd to project dir 
   ```
   cd vana-data-hero-bot
   ```
3. Run 
   ```
   npm instal
   ```
4. Run 
   ```
   npm i telegram@2.22.2
   ```
5. Navigate to `vana-data-hero-bot` directory. 
6. Make new folder named `accounts`.
7. Navigate to `config` folder and rename `config_tmp.js` to `config.js` , `proxy_list_tmp.js` to `proxy_list.js`
8. Now Open and configure `config.js` and `pxoxy_list.js`.
9.  Now back to the `vana-data-hero-bot` folder
10. To start the app open your `Command Prompt` or `Power Shell` again and run 
    ```
    npm run start
    ```
11. If Any error happen contains config or proxy, Copy `config` folder to `app` folder
12. Finally run with
    ```
    node app/index.js
    ```

## Update Bot

To update bot follow this step :
1. run 
   ```
   git pull
   ```` 
   or 
   ```
   git pull --rebase
   ``` 
   if error run 
   ```
   git stash && git pull
   ```
2. run 
   ```
   npm update
   ```
3. start the bot.

## Setup Accounts

1. Run bot `npm run start`
2. Choose option `1` to create account
3. Choose account type `Query` or `Sessions`
4. `Session` Type
   1. Enter Account Name
   2. Enter your phone number starting with countrycode ex : `+628xxxxxxxx`
   3. You will be asked for verification code and password (if any)
   4. Start The bot Again after account creation complete
5. `Query` Type
   1. Enter Account Name
   2. Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)
   3. Start The bot Again after account creation complete
6.  after bot started choose option 3 start bot
   

## Session Troubleshoot
If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions. 

Example Case
- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

## Query Troubleshoot
if your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification.


## CONSOLE RUN SCRIPT

Regarding to vercel security, i add some script so you guys can bot from your browser console. to run just follow this step.

1. Open Game On Your Telegram Desktop or Browser
2. Open Developer Tools / Inspect Element and go to console
3. Paste this
   ```
   fetch("https://raw.githubusercontent.com/Widiskel/vana-data-hero-bot/master/console_run.js")
      .then((response) => response.text())
      .then((script) => eval(script))
      .catch((error) => {
        console.error("Error fetching or executing the script:", error);
      });
   ```

## Join My Telegram Channel

Anyway i create new telegram channel just for sharing bot or airdrop, join here
[**https://t.me/skeldrophunt**](https://t.me/skeldrophunt).

## Note

GAME UPDATED they now use Vercel Security, so botting is not easy like before. thats why i add console run script

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the `accounts` folder to this bot. Also for the telegram APP ID and Hash you can use it from another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks. To get original unencrypted code just DM me on my social media original (index.js and src folder) are Obfuscated during build

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x1f0ea6e0b3590e1ab6c12ea0a24d3d0d9bf7707d`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
