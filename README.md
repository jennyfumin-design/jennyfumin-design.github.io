# 姚秀蓁 Jenny Yao ｜作品集網站

視覺設計 x 旅遊內容作品集，純 HTML／CSS／JS 靜態網站，無需任何建置工具。

## 檔案結構

```
.
├── index.html        主頁面
├── css/
│   └── style.css     樣式
├── js/
│   └── script.js     滾動顯示動畫、導覽點互動
└── images/            作品照片（41張）
```

## 上架到 GitHub Pages

1. 在 GitHub 建立一個新的 repository，例如 `jenny-portfolio`
2. 把這個資料夾內所有檔案（index.html、css/、js/、images/）上傳到 repository 的根目錄
   - 可以直接在 GitHub 網頁上「Add file → Upload files」拖曳整個資料夾內容上去
   - 或用 git 指令：
     ```bash
     cd site
     git init
     git add .
     git commit -m "first commit"
     git branch -M main
     git remote add origin https://github.com/你的帳號/jenny-portfolio.git
     git push -u origin main
     ```
3. 進入 repository 的 **Settings → Pages**
4. 在 **Build and deployment** 底下，Source 選擇 `Deploy from a branch`，Branch 選擇 `main`／`/(root)`，按 Save
5. 等 1～2 分鐘，網站就會上線在：
   `https://你的帳號.github.io/jenny-portfolio/`

## 之後想更新內容

- 改文字：直接編輯 `index.html`
- 改顏色/字型/排版：編輯 `css/style.css`
- 換照片：把新照片放進 `images/`，並在 `index.html` 對應的 `<img src="images/xxx.jpg">` 改成新檔名
- 改完後重新 push 到 GitHub，網站會自動更新（約 1 分鐘內生效）
