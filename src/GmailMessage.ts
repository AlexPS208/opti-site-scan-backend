export const messageHtml = (name?: string, link?: string): string => {
    return `
    <div style="margin: 15px 0;
                padding: 15px;
                background-color: #0186C9;
                font-size: 28px;
                color: #FFF;
                font-width: 1000;
                text-align: center;
                border-radius: 10px">
        Hello, ${name? name : 'user'}, there's your speed analitics
        ${link? ' for <b><a src="'+link+'" style="text-decoration: none; color: #E47979;">'+link+'</a></b>' : ''}
    </div>

    <span style="color: #000; font-size: 21px;">
        Hope you enjoy our service
    </span>
  `
}
