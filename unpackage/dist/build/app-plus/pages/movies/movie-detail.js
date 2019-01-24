
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"search { background: url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAxLTE1VDE2OjU3OjE3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMS0xNVQxNzowMToxNyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMS0xNVQxNzowMToxNyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOTAwNjc5MS0xODQw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\x3d\x3d\x22) no-repeat center center; background-size: 70% auto; }\n.",[1],"status-contents { height: var(--status-bar-height); }\n.",[1],"top-view { width: 100%; position: fixed; z-index: 99999; top: 0; }\n.",[1],"status { height: var(--status-bar-height); }\n.",[1],"titles { background: #1e2535; color: #fff; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; background: #1e2535; color: #f8ffff; position: fixed; left: 0; top: var(--status-bar-height); width: 100%; z-index: 999; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"title-center { white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"title-left, .",[1],"title-right { min-width: ",[0,120],"; }\n.",[1],"title-right { text-align: right; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"title-right .",[1],"iconfont { margin: 0 ",[0,40],"; font-size: ",[0,40],"; }\n.",[1],"title-left { padding: ",[0,20]," 0; }\n.",[1],"title-left .",[1],"iconfont { font-size: ",[0,40],"; }\n.",[1],"title-right .",[1],"iconfont:last-child { margin: 0; }\n.",[1],"icon-star-actived { color: #84d00a; }\n@charset \x22UTF-8\x22;\n.",[1],"detail-bg { height: ",[0,200],"; width: 100%; overflow: hidden; -webkit-filter: blur(20px); filter: blur(20px); border-bottom: 1px solid #ddd; position: relative; }\n.",[1],"movie-wrap { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; position: relative; z-index: 999; background: #fff; }\n.",[1],"movie-wrap-inner { margin-top: ",[0,-100],"; }\n.",[1],"movie-items { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; padding: 0 ",[0,20],"; position: relative; }\n.",[1],"movie-post { width: ",[0,222],"; height: ",[0,320],"; margin-right: ",[0,20],"; }\n.",[1],"movie-post-img { width: ",[0,222],"; height: ",[0,320],"; padding: ",[0,4],"; background: #fff; }\n.",[1],"movie-info { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; color: #fff; font-size: ",[0,30],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; margin-left: ",[0,8],"; }\n.",[1],"namEn { font-size: ",[0,24],"; margin-top: ",[0,10],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; width: 90%; }\n.",[1],"movie-brief { margin-top: ",[0,26],"; color: #212121; font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; }\n.",[1],"movie-brief wx-text { margin: ",[0,10]," 0; }\n.",[1],"story { padding: ",[0,40]," ",[0,20],"; line-height: 1.6; font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; }\n.",[1],"story .",[1],"icon-down { color: #999; text-align: center; margin-top: ",[0,10],"; font-size: ",[0,38],"; }\n.",[1],"story-txt { word-break: break-all; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\n.",[1],"itme-gap { height: ",[0,30],"; background: #f1f1f1; border: 1px solid #f5eaea; border-left: none; border-right: none; }\n.",[1],"arrow-up { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); }\n.",[1],"detail-bg-img { width: 100%; height: ",[0,200],"; }\n.",[1],"actors-title { margin: ",[0,20]," 0; width: 100%; font-size: ",[0,30],"; }\n.",[1],"actor-img-wrap { width: ",[0,200],"; height: ",[0,200],"; border: 1px solid #e4dddd; position: relative; overflow: visible; }\n.",[1],"actors-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; color: #333; }\n.",[1],"actor-name { margin: ",[0,4]," 0; font-size: ",[0,24],"; text-align: center; }\n.",[1],"actor-img { margin-bottom: ",[0,18],"; }\n.",[1],"movie-workers { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; overflow: auto; position: relative; }\n.",[1],"movie-director { padding-right: ",[0,30],"; position: relative; }\n.",[1],"movie-director .",[1],"actor-img-wrap:after { position: absolute; right: ",[0,-30],"; height: 100%; top: 0; width: 1px; background: #f5eaea; content: \x27\x27; display: inline-block; }\n.",[1],"actors-item { margin-left: ",[0,30],"; }\n.",[1],"actors-wrap-inner { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; }\n.",[1],"actors-list { margin-right: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"all-actors { position: absolute; right: 0; top: ",[0,20],"; color: #a2a2a2; }\n",],undefined,{path:"./pages/movies/movie-detail.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/movies/movie-detail.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      