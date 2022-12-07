// ==UserScript==
// @name           药研搜索beta
// @author         Drugx.cn,菜芽君(修改)
// @description    让药物研发人员高效检索文献、资料、数据
// @version        1.0.1
// @created        2022-06-17
// @lastUpdated    2022-11-30

// @namespace      --
// @homepage       https://github.com/caiyajunx/drugsearchJump
// @require        https://greasyfork.org/scripts/408009-togbk/code/toGBK.js?version=832799
// @icon           data:image/png;base64,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

// @include        *://*.google.com/*
// @match          *://*.baidu.com/*
// @match          *://*.bing.com/*
// @match          *://*.bilibili.com/*
// @match          *://*.so.com/*
// @match          *://*.sogou.com/*
// @match          *://*.cnki.net/*
// @match          *://*.deepl.com/*
// @match          *://*.dict.cn/*
// @match          *://*.douban.com/*
// @match          *://*.github.com/*
// @match          *://*.qq.com/*
// @match          *://*.quora.com/*
// @match          *://*.sina.com.cn/*
// @match          *://*.sohu.com/*
// @match          *://*.springer.com/*
// @match          *://*.stackoverflow.com/*
// @match          *://*.twitter.com/*
// @match          *://*.userstyles.org/*
// @match          *://*.wanfangdata.com.cn/*
// @match          *://*.weibo.com/*
// @match          *://*.wikipedia.org/*
// @match          *://*.yandex.com/*
// @match          *://*.youdao.com/*
// @match          *://*.youtube.com/*
// @match          *://*.zdic.net/*
// @match          *://*.zhihu.com/*
// @match          *://*.ecosia.org/*
// @match          *://*.qcc.com/*
// @match          *://*.tianyancha.com/*
// @match          *://*.fsoufsou.com/*
// @match          *://*.douyin.com/*

// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @grant       GM_xmlhttpRequest
// @run-at      document-end

// ==/UserScript==

(function () {
    'use strict';

    console.log("脚本:--- 开始执行 --- 发布者:菜芽君 --- GitHub:https://github.com/caiyajunx/drugsearchJump ← 问题反馈")
    function iqxinstart(){
        // 根据规则把搜索引擎列表插入指定网站
        var rules = [
            // 网页搜索(模板)
            {name: "google网页",// 加载网站名字(方便查找)
                // 是否启用
                enabled: true,
                // 网站上加载正则
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?!tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
                // 加载哪个类型的列表:
                // ['web'|'music'|'video'|'image']
                engineList: 'web',
                // 若固定到顶栏,是否给一个高度
                fixedTop: 52,
                // 搜索列表样式（“style_ACBaidu”可选,为了兼容AC-Baidu脚本）
                style: '\
                    margin-left: 210px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                // 插入文档,相关
                    // target 将引擎跳转工具栏插入到文档的某个元素
                        // (请使用xpath匹配,比如: '//*[@id="subform_ctrl"]'  或者 css匹配(请加上 'css;' 的前缀),比如: 'css;#subform_ctrl' );
                    // keyword 使用 xpath 或者 css选中一个form input元素 或者 该项是一个函数,使用返回值
                    // where 四种:
                        // 'beforeBegin'(插入到给定元素的前面) ;
                        // 'afterBegin'(作为给定元素的第一个子元素) ;
                        // 'beforeEnd' (作为给定元素的最后一个子元素) ;
                        // 'afterEnd'(插入到给定元素的后面);.
                insertIntoDoc: {
                    target: 'css;#appbar',
                    // 若 keyword 使用函数获取
                    // keyword: function () {
                        // var input = document.getElementById('lst-ib');
                        // if (input) return input.value;
                    // },
                    keyword: '//input[@name="q"]',
                    where: 'beforeBegin',
                },
                // 修改源网页用来适应跳转栏（可选）
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important;} #hdtbMenus{top:92px;}'
            },
            {name: "google-hash-query",// 不刷新页面显示搜索结果的google
                enabled: true,
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
                engineList: 'web',
                style: '\
                    margin-left: 138px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    target: 'css;#appbar',
                    keyword: function () {
                        var input = document.getElementById('lst-ib');
                        if (input) return input.value;
                    },
                    where: 'beforeBegin',
                },
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}'
            },
            {name: "百度网页",
                url: /^https?:\/\/www\.baidu\.com\/(?:s|baidu)/,
                enabled: true,
                engineList: "web",
                fixedTop:70,
                style: '\
                    margin-top:8px;\
                    margin-bottom: -5px;\
                    z-index: 101;\
                    margin-left: 134px;\
                ',
                style_ACBaidu: '\
                    margin-top: 8px;\
                    margin-bottom: -5px;\
                    z-index: 99;\
                    text-align: center;\
                    padding-left:0px !important;\
                ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;#s_tab',
                    where: 'afterEnd',
                },
                stylish:".headBlock,.se_common_hint{display:none !important}"
            },
            {name: "必应网页",
                url: /^https?:\/\/[^.]*\.bing\.com\/search/,
                enabled: true,
                engineList: "web",
                style: '\
                    padding-left:15px;\
                    margin-top:6px;\
                    margin-left: 148px;\
                    margin-bottom:-10px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    margin-left: -120px;\
                    margin-right: 0px;\
                    margin-bottom:-20px;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#sb_form_q',
                    target: 'css;#b_content',
                    where: 'beforeBegin',
                },
            },
            {name: "搜狗",
                url: /^https?:\/\/www\.sogou\.com\/(?:web|s)/,
                enabled: true,
                engineList: "web",
                fixedTop:60,
                style: "\
                        top:-46px;\
                        z-index:99;\
                        margin-left:-5px;\
                ",
                style_ACBaidu: "\
                        top:-46px;\
                        z-index:99;\
                        margin-left:60px;\
                        padding-left: 0px !important;\
                ",
                insertIntoDoc: {
                    keyword: "css;#upquery",
                    target: "css;#wrapper",
                    where: "afterBegin",
                },
                stylish:"#float_uphint{display:none;}",
            },
            {name:"yandex",
                url:/^https?:\/\/yandex\.com\/search/i,
                engineList:"web",
                enabled:true,
                fixedTop:56,
                style:"\
                    margin-top:10px;\
                    padding-left:110px;\
                ",
                insertIntoDoc:{
                    keyword:'css;.input__control',
                    target:'css;.navigation',
                    where:'beforeBegin',
                },
            },
            {name: "google网页分类搜索",
                enabled: true,
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
                engineList: 'web',
                style: '\
                    margin-left: 142px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    target: 'css;#appbar',
                    keyword: '//input[@name="q"]',
                    where: 'beforeBegin',
                },
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}'
            },
            {name: "ecosia",
                enabled: true,
                url:/^https?:\/\/www\.ecosia\.org\/search\?/i,
                engineList: 'web',
                style: '\
                    margin-left: -10px;\
                    margin-top: -20px;\
                    z-index:1;\
                    background-color:#fff;\
                ',
                insertIntoDoc: {
                    target: 'css;.mainline',
                    keyword: '//input[@name="q"]',
                    where: 'afterBegin',
                },
            },
           {name: "f搜",
                enabled: true,
                url: /^https?:\/\/fsoufsou\.com\/search/,
                engineList: 'web',
                fixedTop: 111,
                style: '\
                    margin-left: 50px;\
                    z-index: -99999;\
                    margin-top:5px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    z-index: -99999;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    target: 'css;.input-with-suggestion',
                    keyword: function () {
                        var input = document.getElementById('search-input');
                        if (input) return input.value;
                    },
                    where: 'beforeEnd',
                },
                stylish: '.tabs-bottom-border{transform: translate(0, 32px); !important}'
            },

            // 知识
            {name: "百度文库",
                url: /^https?:\/\/wenku\.baidu\.com\/search/i,
                engineList: "knowledge",
                enabled: true,
                fixedTop: 96,
                style: "\
                    margin-bottom: 6px;\
                    margin-top:-16px;\
                    padding:0;\
                ",
                insertIntoDoc: {
                    keyword: function(){
                        var str = document.querySelector("#kw").value;
                        return str;
                        },
                    target: 'css;.bd-wrap',
                    where: 'afterBegin',
                },
            },
            {name: "维基百科",
                url: /^https?:\/\/\D{2,5}\.wikipedia\.org\/wiki/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                        position: absolute;\
                        padding-left: 14em;\
                ",
                insertIntoDoc: {
                    keyword: function(){
                        var url = window.location.href.substring(window.location.href.lastIndexOf("/")+1);
                        return decodeURIComponent(url);
                        },
                    target: 'css;#mw-head',
                    where: 'afterBegin',
                },
            },
            {name: "知乎",
                url: /^https?:\/\/www\.zhihu\.com\/search\?/i,
                engineList: "knowledge",
                enabled: true,
                fixedTop:50,
                style: "\
                    margin: 5px auto 0px;\
                    width:960px;\
                    z-index:19;\
                    background: #fff;\
                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  \
                    padding: 5px 20px; \
                ",
                // 兼容“知乎排版优化”
                    // https://greasyfork.org/zh-CN/scripts/21659
                style_ZhihuChenglinz: "\
                    margin: 5px auto 0px;\
                    width:654px;\
                    z-index:19;\
                    background: #fff;\
                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  \
                    padding: 5px 20px; \
                ",
                insertIntoDoc: {
                    keyword: 'css;.Input',
                    target:"css;.App-main .SearchTabs",
                    where: 'afterEnd', //beforeBegin
                },
                stylish:".TopSearch.Card{margin:30px auto;}",
            },
            {name: "豆丁文档",
                url: /^https?:\/\/www\.docin\.com\/search\.do/,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    text-align: center;\
                    margin:0 auto;\
                    padding-top:1px;\
                    border-top:1px solid #00000;\
                    border-bottom:1px solid #D9E1F7;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#topsearch',
                    target: 'css;.doc_hd_mini',
                    where: 'afterEnd',
                },
            },
            {name: "知乎(搜狗)",
                   url: /^https?:\/\/zhihu\.sogou\.com\/zhihu/,
                   enabled: true,
                   engineList: 'web',
                   fixedTop:55,
                   style: "\
                      margin: auto;\
                      width: 1000px;\
                      z-index:99;\
                   ",
                   insertIntoDoc: {
                      keyword: 'css;#upquery',
                      target: 'css;#header',
                      where: 'afterEnd',
                   },
                   stylish: '.header{ margin-bottom: 5px; }'
            },
            {name: "微信搜狗",
                url: /^https?:\/\/weixin\.sogou\.com\/weixin\?/,
                enabled: true,
                engineList: "web",
                fixedTop:55,
                style: "width: 1000px;margin: 8px auto -5px;z-index:99;",
                insertIntoDoc: {
                    keyword: "//input[@name='query']",
                    target: "css;.header-box",
                    where: "afterEnd",
                },
            },
            {name: "Quora",
                       // https://www.quora.com/search?q=china
                url:  /^https?:\/\/www\.quora\.com\/search\?/i,
                enabled: true,
                engineList: "knowledge",
                fixedTop:53,
                style: "width: 1000px;margin: 0px auto 0px; padding-left:180px;",
                insertIntoDoc: {
                    keyword: function(){
                        var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
                        return decodeURIComponent(url);
                        },
                    target: "css;.SiteHeader",
                    where: "beforeEnd",
                },
            },
            {name: "stackoverflow",
                url: /^https?:\/\/stackoverflow\.com\/search\?/i,
                enabled: true,
                engineList: "knowledge",
                fixedTop:50,
                style: "width: 1000px;margin: 8px auto 0px;z-index:99;",
                insertIntoDoc: {
                    keyword: "//input[@name='q']",
                    target: "css;.top-bar",
                    where: "afterEnd",
                },
            },


            // 视频网站
            {name: "哔哩哔哩",
                url: /^https?:\/\/search\.bilibili\.com\/all/,
                enabled: true,
                engineList: "video",
                // fixedTop:62,
                style: "\
                    width:980px;\
                    margin:10px auto -5px;\
                    text-align:center;\
                ",
                insertIntoDoc: {
                    // keyword: 'css;#search-keyword',   //旧
                    // target: 'css;.filter-wrap',     //旧
                    // keyword: 'css;.search-input-el',
                    keyword: function(){
                        if(document.querySelector("#search-keyword")){
                            return document.querySelector("#search-keyword").value;
                        } else{
                            return document.querySelector(".search-input-el").value;
                        }
                    },
                    // target: 'css;.search-input',
                    target: function(){
                        if(document.querySelector(".head-contain")){
                            return  document.querySelector(".head-contain");
                        } else{
                            return  document.querySelector(".search-input");
                        }
                    },
                    where: 'afterEnd',
                },
            },

            // 图片
            {name: "百度图片",
                url: /^https?:\/\/image\.baidu\.com\/search/i,
                enabled: true,
                engineList: "image",
                fixedTop:95,  //关闭关联联想的情况下
                // fixedTop:135,  //
                style: '\
                    margin-left:127px;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;.s_tab',
                    where: 'afterEnd',
                },
            },
            {name: "谷歌图片",
                url: /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/[^?]+\?.*&tbm=isch/i,
                enabled: true,
                engineList: "image",
                fixedTop:54,
                style: '\
                    margin-left:136px;\
                    padding: 10px 5px 1px 22px;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input[name=q]',
                    // target: 'css;#ucs',
                    target: 'css;.ndYZfc',
                    where: 'afterBegin',
                    // where: 'beforeEnd',
                },
            },


            //学术搜索列表
            {name: "百度学术",
                url: /^https?:\/\/xueshu\.baidu\.com\/(?:s|baidu)/,
                enabled: true,
                engineList: "scholar",
                style: '\
                    text-align: center;\
                    margin:0px;\
                    top:0px;\
                    z-index:99999;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;#head_wr',
                    where: 'afterEnd',
                },
            },
            {name: "EBSCO",
                enabled: true,
                url: /^http:\/\/.*?ebscohost\.com\/.*?results/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#SearchTerm1',
                    target:'css;#findFieldOuter',
                    where:'afterend',
                }
            },

            //  用户补充: kidzgy
            //  https://greasyfork.org/zh-CN/scripts/27752/discussions/90497
            {
                name: "企查查",
                url: /^https?:\/\/www\.qcc\.com\/(?:web|firm|)/,
                engineList: 'enterprise',
                enabled: true,
                fixedTop:56,
                style: '\
                    width:1250px;\
                    margin: 0 auto;\
                    padding-left: 15px;\
                ',
                insertIntoDoc: {
                keyword: 'css;#searchKey',
                target: 'css;.app-nheader',
                where: 'AfterEnd',
                },
                stylish: ' .bigsearch-nav.fixed > .nav-wrap { position: static !important; }',
            },

            // 回家没网,用8090端口离线测试使用。
            {
                name:"test",
                enabled:true,
                url:/^https?:\/\/127\.0\.0\.1:8090\/./,
                style:"\
                    margin:150px;\
                ",
                insertIntoDoc: {
                    keyword:function(){return false},
                    target:'css;body',
                    where:'beforeEnd',
                }
            }
        ];

        // 有些图标需要重复使用
        var icon ={};
        icon = {
            google:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTAyVDA3OjQzOjU0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0wMlQwNzo0NDoyMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOC0wMlQwNzo0NDoyMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2ZjQ0NTJmYy0xY2IzLWQyNDMtODRiMy02MGMxY2Q0Yzk0MTQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowNGU0NWRjMy02MmY5LTU2NGQtYmY5NS01YWU0ZGVhOTYxOWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxY2NhMTM3YS0xODJjLTE4NGQtOGM1YS1jOTQzZGRlMDBlYjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFjY2ExMzdhLTE4MmMtMTg0ZC04YzVhLWM5NDNkZGUwMGViMCIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0wMlQwNzo0Mzo1NCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZjQ0NTJmYy0xY2IzLWQyNDMtODRiMy02MGMxY2Q0Yzk0MTQiIHN0RXZ0OndoZW49IjIwMjAtMDgtMDJUMDc6NDQ6MjArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Adq1DAAAClUlEQVRYw2P4//8/w0BihlEHDDkHfF06z/RDSVb+m1CPSa/cLJa8cjVf9ibYber7oozCrwtnWdHMAR8bK+JfuZgte+VsuhKI/+PAK0FqPtaXJVHNAd93bZV+7W03l4DFGA557WM/98f+XWIUOeDr8gXGJFqM4ohPXY0hZDsA5HMclq98lxrZ+GX2ZIfvW9Ypf9+6XvHL7CkO79KiGpHUr/zU1xZAURS89rJdgG7x25iAnp9nTrDj0vPz9HH2NxE+fZ+n9HhSlAa+TMjNQvP9yvc5iRV0y4a/d7Lf+ViuAPc9KMvRrRz4e78t4Pce1ntA/P/rZNH/rz1NVn7fsVmWbg74c9ZtKshyGP65TnE/XUvC34dkDiM74M/lyEZ8Bji1fplJLN5/9bcAYQfsZb+D7IC/d2ojiXDAf2Lw0qO/dAbUAfMP/jQmPQouRTRTGAVwB6w68UuDcCI8546SCJ8c0ltPbgJDc8DMg9d/8xKRDTv8YNlw81bF/zYrAhZsuLtHkVTLVxz/pYXuAKILom97OG+2bTD+b7IiGIzdNiRNJdUBIRO+tiMHf8LMb1VEO6D/eFMI0OKVMAeA2DE7S+uItbx8+fd4dN+vxBL/eCsjuzXRc5EcAHaEz6b0vkNPz/Diszx544oyp9aPKIkPFBok14bbHxySQAsFuENCtuW1956b777q1naN1bd3qE29tNQuZU91memKEJD6leYLyv87dj6G+/7wjT/cZDVIFt/YqI/DEQSx6dKE/3Z9p+Ziy/skNcl2PjwiZrcmZi6JDllpvjJs2exLG82p1iitPtYfbbYyZBkBh4CjIH1fXSHNmuULr683zDnQlOu5MXWSxaqwJSCfum1Inpq6t7YYlBZGe0ajDiAVAwCcsjeFTD7reAAAAABJRU5ErkJggg==",
            search:"data:image/png;base64,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",
            baidu:"data:image/x-icon;base64,AAABAAEAGBgAAAEACADIBgAAFgAAACgAAAAYAAAAMAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/51YAP+JNQD/rnUA/9zCAP+4hQD/tH4A/4gzAP+INAD/0bAA/9KyAP+KNwD/jj0A/5hPAP+2ggD/l0wA/7F5AP+XTQD/tX8A/4o2AP+kYwD/0K8A/61zAP/LpgD/izgA/8WbAP+SRAD/jTsA/9KzAP+TRgD/oV4A/6BcAP+cVAD/wZQA/9vCAP/HoAD/yKEA/59aAP+jYgD/3cUA/6hqAP+rbwD/wZUA/6VkAP/PrQD/0bEA/55YAP+PPgD/3cQA/82pAP/KpQD/wJMA/6ZmAP+udAD/kEEA/9a4AP/GngD/kUIA/+zfAP+kZAD/jDoA/6VlAP+6iQD/nlkA//TsAP+oawD/qWsA/7yMAP/IogD/9e8A/5pTAP+NPAD/nFYA/7aBAP/17gD/07QA/9vBAP/48gD/ol8A////AP/o2QD/xJkA/5hOAP/t4AD/zKcA/6puAP/JogD/7+QA/8KXAP+TRwD/8ukA//r3AP/gygD/zqwA//bvAP+VSQD/sHgA/9CuAP/OqwD/kUMA/6doAP+PPwD/lUoA/4s5AP+USAD/2r8A/9W2AP+9jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATGlpAAAAAABqKmtUAAAAAAAAAAAAADdlBwcHBzYPZmcHBwcHaAAAAAAAAAAAADYHGGBhHGJjZCwcHBYHBykAAAAAAAAACgcHWFo4Ck0BW1xdXlEHB18AAAAAAAAAVgcHV1gHNE1OT1IHUFEHB1kAAAAAAAAAMAIHU1QHNE1OTxEHUFEHB1UAAAAAAAAAACkHSUpLTE1OTxEHUFEHUgAAAAAAAAAAAABCCCtDREVGEEcHQkg/AAAAAAAAAAAAAAAAPgIHP0ARBwcHB0EAAAAAAAAAAAAAAAAAADgCOQYMBwcHHjo7PDw9AAAAAAAAMzQ1AAAGBwcHBwc2ADcHBwcHBAAAAAAtBwcHHgAALgcHBy8wADEHBwcHMgAAAAApBwcHCwAAACorEAAAACwHBwcHFQAAAAAoBwcHBwAAAAAAAAAAAAACBwcYAAAAAAAhBwcHEQAAIgAAAAAjIwAkJSYnAAAAAAAAGgcbHAAdBx4AAB8HByAAAAAAAAAAAAAAABUAABYHBwcXABgHBwcZAAAAAAAAAAAAAAAAABEHBwcSABMHBwcUAAAAAAAAAAAAAAAAAA0HBwcOAA8HBwcQAAAAAAAAAAAAAAAAAAYHBwgJAAoLBwwAAAAAAAAAAAAAAAAAAAABAgMAAAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////APx8PwDwAB8A8AAPAOAADwDgAA8A4AAPAPAAHwD4AD8A/AB/AP4ABwDjAQMAwYEDAMHHAwDB/4cAwbyHAOEYfwD2CD8A/gg/AP4IPwD+CH8A/xz/AP///wD///8A",
            bing:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
            edit:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg==",
            del:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg==",
            web : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg3MjgxNjcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMjMiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk0OC4wMzIgOTAyLjc4NGwtMjA2Ljk3Ni0yMDYuOTc2Qzc5Ny42OTYgNjI4LjkyOCA4MzIgNTQyLjUyOCA4MzIgNDQ4YzAtMjEyLjA2NC0xNzEuOTM2LTM4NC0zODQtMzg0UzY0IDIzNS45MzYgNjQgNDQ4czE3MS45MzYgMzg0IDM4NCAzODRjOTQuNTI4IDAgMTgwLjkyOC0zNC4zMDQgMjQ3LjgwOC05MC45MTJsMjA2Ljk3NiAyMDYuOTc2YzE0LjAxNiAxNC4wMTYgMzUuNDg4IDE1LjIzMiA0OCAyLjcyQzk2My4yNjQgOTM4LjI3MiA5NjIuMDQ4IDkxNi44IDk0OC4wMzIgOTAyLjc4NHpNNDQ4IDc2OEMyNzEuMjY0IDc2OCAxMjggNjI0LjczNiAxMjggNDQ4UzI3MS4yNjQgMTI4IDQ0OCAxMjhzMzIwIDE0My4yNjQgMzIwIDMyMFM2MjQuNzM2IDc2OCA0NDggNzY4eiIgcC1pZD0iMzIyNCIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjwvc3ZnPg==",
            translate: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg3MzQ5NDUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5ODgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY4NC4wMzIgNzIyLjQzMmgtMTEuNzc2Yy0xOS40NTYgMC0zNi44NjQtMTIuMjg4LTQyLjQ5Ni0zMC43MmwtMTguOTQ0LTU4LjM2OGEyNS4zOTUyIDI1LjM5NTIgMCAwIDAtMjQuMDY0LTE3LjQwOEg0NTQuNjU2Yy0xMC43NTIgMC0yMC40OCA3LjE2OC0yNC4wNjQgMTcuNDA4bC0xOC45NDQgNTcuODU2YTQ1LjA1NiA0NS4wNTYgMCAwIDEtNDIuNDk2IDMxLjIzMmgtMTAuMjRhNDQuODUxMiA0NC44NTEyIDAgMCAxLTQxLjk4NC02MC40MTZsMTQxLjgyNC0zODguMDk2YzMuNTg0LTkuNzI4IDEzLjMxMi0xNi4zODQgMjMuNTUyLTE2LjM4NEg1NjMuMmMxMC43NTIgMCAxOS45NjggNi42NTYgMjMuNTUyIDE2Ljg5NmwxMzkuMjY0IDM4OC4wOTZhNDQuNDkyOCA0NC40OTI4IDAgMCAxLTQxLjk4NCA1OS45MDR6IG0tMTY0LjM1Mi0xODIuNzg0YzMwLjcyIDAgNTIuMjI0LTI5LjY5NiA0Mi40OTYtNTguODhsLTMzLjI4LTEwMi40Yy0zLjU4NC0xMC4yNC01LjYzMi0yMy41NTItNy4xNjgtNDAuNDQ4aC0yLjU2Yy0xLjAyNCAxMy44MjQtNC4wOTYgMjYuNjI0LTguMTkyIDM5LjQyNGwtMzQuMzA0IDEwMy40MjRjLTkuMjE2IDI4LjY3MiAxMi4yODggNTguODggNDMuMDA4IDU4Ljg4eiIgcC1pZD0iMzk4OSIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik04NzAuOTEyIDU2My4yYy0yOC4xNiAwLTUxLjIgMjMuMDQtNTEuMiA1MS4ydjI1NmMwIDI4LjE2LTIzLjA0IDUxLjItNTEuMiA1MS4yaC01MTJjLTI4LjE2IDAtNTEuMi0yMy4wNC01MS4yLTUxLjJ2LTI1NmMwLTI4LjE2LTIzLjA0LTUxLjItNTEuMi01MS4ySDE1My42Yy0xMy4zMTIgMC0yNi4xMTIgNS4xMi0zNi4zNTIgMTQuODQ4TDE1LjM2IDY3OS45MzZhNTAuOTk1MiA1MC45OTUyIDAgMSAwIDcyLjE5MiA3Mi4xOTJMMTAyLjQgNzM3LjI4Vjg3MC40YzAgODQuNDggNjkuMTIgMTUzLjYgMTUzLjYgMTUzLjZoNTEyYzg0LjQ4IDAgMTUzLjYtNjkuMTIgMTUzLjYtMTUzLjZ2LTI1NmMwLjUxMi0yOC4xNi0yMi41MjgtNTEuMi01MC42ODgtNTEuMnpNMTAwOC42NCAyNzMuOTJhNTAuOTk1MiA1MC45OTUyIDAgMCAwLTcyLjE5MiAwbC0xNC4zMzYgMTQuMzM2VjE1NC4xMTJjMC04NC40OC02OS4xMi0xNTMuNi0xNTMuNi0xNTMuNmgtNTEyYy04NC40OCAwLTE1My42IDY5LjEyLTE1My42IDE1My42djI1OC41NmMwIDI4LjE2IDIzLjA0IDUxLjIgNTEuMiA1MS4yczUxLjItMjMuMDQgNTEuMi01MS4yVjE1NC4xMTJjMC0yOC4xNiAyMy4wNC01MS4yIDUxLjItNTEuMmg1MTJjMjguMTYgMCA1MS4yIDIzLjA0IDUxLjIgNTEuMnYyNTguNTZjMCAyLjU2IDEuMDI0IDQuNjA4IDEuNTM2IDcuMTY4IDAuNTEyIDQuMDk2IDEuMDI0IDguMTkyIDIuNTYgMTEuNzc2IDcuNjggMTguOTQ0IDI2LjExMiAzMi4yNTYgNDcuMTA0IDMyLjI1NiAxNC4zMzYgMCAyNy42NDgtNi4xNDQgMzYuODY0LTE1Ljg3MmwxMDEuMzc2LTEwMS4zNzZjMTkuNDU2LTE5Ljk2OCAxOS40NTYtNTIuNzM2LTAuNTEyLTcyLjcwNHoiIHAtaWQ9IjM5OTAiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4=",
            knowledge:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg3NTUzMTE3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4OTQiIHdpZHRoPSIxNi4wMTU2MjUiIGhlaWdodD0iMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMDE3LjIxNiA2NzEuNDI0Yy02LjA4LTIzLjIzMi0xNS4xMDQtNDEuNDA4LTIxLjk1Mi01Mi45OTIgMzEuNTUyLTUwLjU2IDM2Ljk5Mi0xMDYuNjI0IDE1Ljc0NC0xNjIuNjI0LTcuNDg4LTE5Ljg0LTE3LjI4LTM2LjQxNi0yNS41MzYtNDguNTEyIDQ1LjQ0LTcxLjA0IDQwLjEyOC0xMzEuNzc2IDI3LjMyOC0xNzAuNjI0LTE0LjQtNDQuMDMyLTQxLjI4LTY5LjY5Ni00Mi4zNjgtNzAuNzJMNTE5LjEwNCA0LjhzLTM4MC42MDggOTYuNzA0LTUwNy41MiAxMjguOTZjLTcuODA4IDEuOTg0LTcuMjMyIDIxLjEyIDAuNzY4IDI1LjQ3MiAxMTQuMzY4IDYyLjI3MiA0NTcuNiAyNDkuMTUyIDQ1Ny42IDI0OS4xNTJMOTQxLjQ0IDIyOS40NGM1LjI0OCA4LjQ0OCA5LjM0NCAxNy40MDggMTIuNDE2IDI2LjYyNCAxMS45NjggMzYuNDggNS42OTYgNzQuOTQ0LTE4LjU2IDExNC40OTZMNDc1LjI2NCA1MzYuMTI4IDQ2LjI3MiAyOTYuODk2Yy0xNC40NjQtOC4xMjgtMzQuMTc2LTIuNTYtNDIuMzY4IDEyLjAzMi00LjAzMiA3LjIzMi00LjkyOCAxNS42MTYtMi42ODggMjMuNTUyIDIuMjQgOC4wNjQgNy41NTIgMTQuNjU2IDE0Ljc4NCAxOC42MjRMNDY5LjY5NiA2MDQuMTZsNDYxLjQ0LTE2Ni4xNDRjNi41OTIgOC45NiAxNS42MTYgMjMuMjMyIDIyLjE0NCA0MC43MDQgMTMuNDQgMzYuMTYgMTAuNDMyIDcxLjEwNC04Ljg5NiAxMDMuODcybC00NjguOCAxNjAuMTkyTDQ2LjQgNTAyLjMzNmMtMTQuNTI4LTguMTkyLTM0LjE3Ni0yLjQ5Ni00Mi4zNjggMTEuOTY4LTguMzIgMTQuOTEyLTMuMDA4IDMzLjg1NiAxMS45MDQgNDIuMjRMNDU3LjI4IDgwMy43NzZsMTIuMDk2IDYuNzIgNDcxLjkzNi0xNjEuMjhjNC43MzYgNy44NzIgMTEuNTg0IDIxLjMxMiAxNi4wNjQgMzkuMjMyIDkuMDg4IDM2LjAzMiA0LjU0NCA3My40MDgtMTMuMzc2IDExMS4xNjhMNDc3Ljk1MiA5NTEuNzQ0IDQ2LjI3MiA3MTIuMzJjLTE0LjU5Mi04LTM0LjE3Ni0yLjM2OC00Mi4yNCAxMi4wOTZDMCA3MzEuNjQ4LTAuODk2IDc0MC4wMzIgMS4zNDQgNzQ3Ljk2OGMyLjI0IDggNy41NTIgMTQuNjU2IDE0Ljc4NCAxOC42MjRMNDcxLjU1MiAxMDE5LjJsNTE1Ljc3Ni0xNjguMzg0TDk5My4yMTYgODQwYzM3Ljg4OC02OS45NTIgMzMuOTg0LTEzMC4yNCAyNC0xNjguNTc2ek04NjUuMTUyIDE5MS45MzZMNDc0LjU2IDM0MC4yMjRsLTgwLjI1Ni00My43MTIgMzkwLjQtMTMyLjczNiA4MC40NDggMjguMTZ6TTE2LjE5MiAzMTUuNjQ4eiBtMC4xMjggMjA1LjUwNHogbS0wLjA2NCAyMDkuOTg0eiIgcC1pZD0iNDg5NSIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjwvc3ZnPg==",
            image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg3NjYzODI4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjcgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxMjciIHdpZHRoPSIxNi4wNDY4NzUiIGhlaWdodD0iMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MzYuOTYgODkuNiA4Ny4wNCA4OS42QzM4LjQgODkuNiAwIDEyOCAwIDE3NC4wOGwwIDY5MS4yYzAgNDguNjQgMzguNCA4Ny4wNCA4Ny4wNCA4Ny4wNGw4NTIuNDggMGM0OC42NCAwIDg3LjA0LTM4LjQgODcuMDQtODcuMDRsMC02OTEuMkMxMDI0IDEyOCA5ODUuNiA4OS42IDkzNi45NiA4OS42ek05NzIuOCA4NjUuMjhjMCAxNy45Mi0xNS4zNiAzNS44NC0zNS44NCAzNS44NEw4Ny4wNCA5MDEuMTJjLTE3LjkyIDAtMzUuODQtMTUuMzYtMzUuODQtMzUuODRMNTEuMiA2NjUuNmwyNjEuMTItMjIwLjE2IDI3My45MiAyNjMuNjhjMTAuMjQgMTAuMjQgMjMuMDQgMTAuMjQgMzMuMjggMGwxMzAuNTYtMTA3LjUyIDIxNS4wNCAyMjAuMTZjMi41NiAyLjU2IDUuMTIgMi41NiA3LjY4IDUuMTJMOTcyLjggODY1LjI4ek05NzIuOCA3NTcuNzZsLTIwMi4yNC0yMDcuMzZjLTEwLjI0LTEwLjI0LTI1LjYtMTAuMjQtMzUuODQtMi41NmwtMTMwLjU2IDEwNy41MkwzMzAuMjQgMzk0LjI0Yy0xMC4yNC0xMC4yNC0yMy4wNC0xMC4yNC0zMy4yOCAwbC0yNDUuNzYgMjA0LjhMNTEuMiAxNzQuMDhjMC0xNy45MiAxNS4zNi0zNS44NCAzNS44NC0zNS44NGw4NTIuNDggMGMxNy45MiAwIDM1Ljg0IDE1LjM2IDM1Ljg0IDM1Ljg0TDk3NS4zNiA3NTcuNzZ6IiBwLWlkPSI2MTI4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+",
            video:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg4MTIxNzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4NzE2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00MjkuMDYgNzEzLjI1Yy04LjcxIDAtMTcuNDYtMS45OS0yNS42My02LjAyLTE5LjYzLTkuNzEtMzEuODItMjkuMjctMzEuODItNTEuMDZWMzY2LjgzYzAtMjEuNzkgMTIuMTktNDEuMzUgMzEuODMtNTEuMDYgMTkuMDItOS40IDQxLjI1LTcuNjkgNTguNTIgNC4zN2wyMzIuNyAxNDQuODkgMS4zMSAwLjk5YzE0LjQ3IDEwLjg3IDIyLjc3IDI3LjQ1IDIyLjc3IDQ1LjQ4IDAgMTguMDItOC4zIDM0LjYtMjIuNzcgNDUuNDhsLTEuMzEgMC45OS0yMzIuNyAxNDQuODljLTkuODYgNi44OC0yMS4zNCAxMC4zOS0zMi45IDEwLjM5eiBtMTcuNDYtMzE0Ljg3djIyNi4yM0w2MjguMTkgNTExLjUgNDQ2LjUyIDM5OC4zOHogbTAgMCIgcC1pZD0iMTg3MTciIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48cGF0aCBkPSJNODc2LjE1IDk2MGgtNzI4LjNDNjYuMzMgOTYwIDAgODk0LjEgMCA4MTMuMTFWMjA5Ljg5QzAgMTI4LjkgNjYuMzMgNjMgMTQ3Ljg1IDYzaDcyOC4yOUM5NTcuNjcgNjMgMTAyNCAxMjguOSAxMDI0IDIwOS44OVY4MTMuMWMwIDgxLTY2LjMzIDE0Ni45LTE0Ny44NSAxNDYuOXogbS03MjguMy04MjIuNTZjLTQwLjIxIDAtNzIuOTMgMzIuNS03Mi45MyA3Mi40NVY4MTMuMWMwIDM5Ljk1IDMyLjcxIDcyLjQ1IDcyLjkzIDcyLjQ1aDcyOC4yOWM0MC4yMSAwIDcyLjkzLTMyLjUgNzIuOTMtNzIuNDVWMjA5Ljg5YzAtMzkuOTUtMzIuNzEtNzIuNDUtNzIuOTMtNzIuNDVIMTQ3Ljg1eiBtMCAwIiBwLWlkPSIxODcxOCIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjwvc3ZnPg==",
            scholar:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg4NTI4MjgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3NDIzIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xNDEuOTQgNDA3LjY2NmwzNjguNDk1IDE5My4xMSAzNjguNDk0LTE5My4xMS0zNjguNDk0LTE5MS4wNjRMMTQxLjk0IDQwNy42NjZ6IG0zNzYuNzgtMjI3LjMybDQwNy40MzUgMjExLjI1NWMxMi45MjEgNi43IDEyLjk2MSAyNS4xNjggMC4wNyAzMS45MjNMNTE4Ljc5IDYzNy4wNDJhMTggMTggMCAwIDEtMTYuNzEgMEw5NC42NDUgNDIzLjUyNGMtMTIuODkyLTYuNzU1LTEyLjg1Mi0yNS4yMjMgMC4wNy0zMS45MjNsNDA3LjQzNC0yMTEuMjU1YTE4IDE4IDAgMCAxIDE2LjU3MSAweiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iMjc0MjQiPjwvcGF0aD48cGF0aCBkPSJNNzM4LjQ0MyA0OTYuOTE4YzAtOS45NDEgOC4wNi0xOCAxOC0xOCA5Ljk0MSAwIDE4IDguMDU5IDE4IDE4djI5Ni4yOGExOCAxOCAwIDAgMS0xMC4zNTMgMTYuMjk1TDQ5Ny4yOTggOTM0LjY4MmExOCAxOCAwIDAgMS0xNS43MDEtMC4xOThsLTI1MC4xODMtMTI1LjE5YTE4IDE4IDAgMCAxLTkuOTQ1LTE2LjA5N1Y0ODEuNGMwLTkuOTQyIDguMDYtMTggMTgtMTggOS45NDEgMCAxOCA4LjA1OCAxOCAxOHYzMDAuNjc3bDIzMi40MzUgMTE2LjMwOCAyNDguNTQtMTE2LjYyNFY0OTYuOTE4eiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iMjc0MjUiPjwvcGF0aD48cGF0aCBkPSJNODY0LjEyIDUxMC45OGMwLTkuOTQyIDguMDU4LTE4IDE4LTE4IDkuOTQgMCAxOCA4LjA1OCAxOCAxOHYyMjkuMDk3YzAgOS45NDEtOC4wNiAxOC0xOCAxOC05Ljk0MiAwLTE4LTguMDU5LTE4LTE4VjUxMC45Nzl6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSIyNzQyNiI+PC9wYXRoPjwvc3ZnPg==",
            mine:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1Nzg4NjgxMjc0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5ODE1IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01NTAuMzE1IDgyMi41ODJsMjI5LjU1OCAxMjUuOTM3LTQzLjA0Mi0yNjYuMjIzYy00Ljc4My0zMC4yODkgNC43ODItNjIuMTcyIDI1LjUwNi04Mi44OTZsMTgzLjMyOC0xODguMTEtMjU2LjY1OS0zOS44NTNjLTI4LjY5NC0zLjE4OC01NC4yLTIzLjkxMi02OC41NDgtNTEuMDEzbC0xMTEuNTktMjQyLjMxTDM5NS42ODIgMzE4LjgzYy0xMi43NTQgMjguNjk1LTM4LjI2IDQ3LjgyNS02OC41NDkgNTEuMDEzTDcwLjQ3NiA0MTEuMjlsMTg0LjkyMSAxODkuNzA0YzIyLjMxOSAyMC43MjQgMzAuMjkgNTIuNjA3IDI1LjUwNyA4Mi44OTVsLTQxLjQ0OCAyNjQuNjMgMjI5LjU1OC0xMjUuOTM4YzIzLjkxMi0xNS45NDIgNTUuNzk1LTE1Ljk0MiA4MS4zMDEgMHogbS00OS40MTggNjUuMzZMMjcxLjMzOSAxMDEzLjg4Yy0zNi42NjUgMTkuMTMtNzkuNzA4IDYuMzc2LTk3LjI0My0zMS44ODMtNy45Ny0xNC4zNDgtMTEuMTYtMzEuODgzLTcuOTctNDcuODI1bDQzLjA0MS0yNjQuNjI5YzEuNTk0LTYuMzc3LTEuNTk0LTEyLjc1My00Ljc4Mi0xNy41MzZMMjIuNjUyIDQ2NS40OTJjLTI4LjY5NS0yOC42OTUtMjguNjk1LTc2LjUyLTEuNTk1LTEwNi44MDggMTEuMTYtMTEuMTYgMjUuNTA3LTE5LjEzIDQxLjQ0OC0yMi4zMThsMjU2LjY1OC0zOS44NTRjNC43ODMgMCAxMS4xNi02LjM3NyAxNC4zNDgtOS41NjVsMTEzLjE4NC0yNDIuMzFjMTcuNTM2LTM4LjI2IDYwLjU3OC01Mi42MDggOTcuMjQ0LTMzLjQ3OCAxNC4zNDcgNy45NyAyNS41MDYgMTkuMTMgMzEuODgzIDMzLjQ3N2wxMTEuNTkgMjQyLjMxMWMxLjU5NCA2LjM3NyA3Ljk3IDkuNTY1IDE0LjM0OCA5LjU2NWwyNTYuNjU4IDM5Ljg1NGMzOS44NTMgNi4zNzYgNjYuOTU0IDQzLjA0MiA2MC41NzcgODQuNDktMS41OTQgMTcuNTM1LTkuNTY0IDMxLjg4My0yMi4zMTggNDMuMDQyTDgxNC45NDQgNjUzLjYwMmMtMy4xODggMy4xODgtNC43ODIgMTEuMTU5LTQuNzgyIDE3LjUzNWw0My4wNDIgMjY2LjIyM2M3Ljk3IDQxLjQ0OC0xOS4xMyA3OS43MDgtNTguOTg0IDg2LjA4NC0xNS45NDEgMS41OTUtMzEuODgzIDAtNDQuNjM2LTcuOTdMNTIwLjAyNiA4ODkuNTM2Yy02LjM3Ni0zLjE4OC0xNC4zNDctMy4xODgtMTkuMTMtMS41OTR6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSIyOTgxNiI+PC9wYXRoPjwvc3ZnPg==",
            drugx:"data:image/png;base64,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",

        };

        // 搜索引擎列表
        var engineList = {};

        // 网页搜索列表
        engineList.web = [];

        engineList.web[0] = {
            name: '百度',
            url: 'https://www.baidu.com/s?wd=%s&ie=utf-8',
            favicon: icon.baidu,
        };
        // engineList.web[0] 中间的数字表示排序(数字不能重复,否则后面的会覆盖掉前面的),越小数字越靠前,小于0该引擎不会显示在页面上
        engineList.web[1] = {
            // 搜索引擎名称
            name: 'Google',
            // 搜索引擎地址,关键字变量用%s代替
            url: 'https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8',
            // 搜索引擎的站点图标
            favicon: icon.google,
            // 弃用；搜索引擎编码（默认utf-8）如果跳转后乱码可以填写 'gbk'
            // 弃用：encoding: 'utf-8',
            // 如果网站使用的gbk编码
            gbk:false,
            // 新标签页打开
            // blank:true,
            // 禁用该搜索, 只在设置中显示该搜索
            // disable:true,
        };
        engineList.web[2] = {
            name: '必应',
            url: 'https://cn.bing.com/search?q=%s',
            favicon: icon.bing,
        };
        engineList.web[3] = {
            name: 'Qwant',
            url: 'https://www.qwant.com/?q=%s',
            favicon: icon.search,
        };
        engineList.web[4] = {
            name: 'Etools',
            url: 'https://www.etools.ch/searchSubmit.do?query=%s',
            favicon: icon.search,
        };
        engineList.web[5] = {
            name: 'F搜',
            url: 'https://fsoufsou.com/search?q=%s',
            favicon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gAUU29mdHdhcmU6IFNuaXBhc3Rl/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAPQA9AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VOiiigAor52/aS/anT4UXB8PeH4Ir3xIyB5ZZuYbRT0yB95yO3Qd/SvkbW/2jviRr8zSXPiy/jBOdlswhQfQKBX2uWcJ47MqKr3UIPa97td7Lp6nzWNz7C4Oo6VnKS3tsvmz9QqK/KpPjb4+Rww8XavkHI/0pq/S/4ZaxdeIfhz4Y1S+Ja9vdMt7iYkYJdo1LfqTXNnXDtbJIQqVKikpNrS/RX6m+W5vTzKUoQg4uKvrb0Omooor5M94KKKKAPyV+IXiOXxd4517WJpDI15eyygk5+Usdo/AYH4V9T/ALPP7InhzxL4F07xL4s+0Xk+op58FnHIY444iflJxySRz6YIr43r6k8H/tx3XhHwlouhx+FIJ002yhsxL9qK7/LQLuxt4zjP41/RWfUMyeDp4fKdGnZ2aTUUtNX59j8hyurg1iJ1cfqul03q2fQkP7I/wuhlV/8AhHt+052vcSEH6jNeu2dnBp9pDa20SwW8KCOOJBhUUDAAHoBXzv8ABD9r+L4r+OLbwxeaAdLubuORreeKfzFLIhcqwIGPlVjn2r6Or8SzaGZUKqoZlKTkldXlfR9Vq10P0rASwdWDq4NJLZ2Vtgooorwj1AooooA/HSvr7wT+w1pPivwZoGtyeKr23k1LT7e9aFbVCEMkauVB3c43Yr5Br9W/g5/ySLwP/wBgOx/9J0r954vzLF5bQozwk+Vyk09v5b9Uz8s4fwdDGVaka8eZJK2/fyPNfg7+yNoXwk8YQ+I11i71e+t43S3WWJY0jLqVZuCcnaWH4171RRX4pjMdicwq+2xU3KVrXfb5WP0nD4WjhIezoR5VuFFFFcJ1BRRRQB8aXn/BPqd9WkNr4xij01pCUEliWlRM8A4cAkDvxn2r668O6JB4Z8P6Zo9qWNrp9rFaRFzlikaBVz74ArRor2swzjG5pGEMXPmUdtEvK+m55uEy7DYJylQjZy31b/MKKKK8U9IKKKKAP//Z'
        };
        engineList.web[6] = {
            name: '微信',
            url: 'http://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s',
            favicon: 'data:image/png;base64,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',
        };

        // 视频搜索列表
        engineList.video = [];

        engineList.video[0] = {
            name: 'bilibili',
            url: 'http://search.bilibili.com/all?keyword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVQ4ja2Syw2DQAxEhwvdIHEklENFUIIN5EAftGAjigA6cA58krBZaZMwki+7nqfR7gC7zCLQUKDRBD41moCGAmaRe9mOKUgMrAsayVyzZGBdQGJox9QFmEVgbT9CXs2k9/cEncUgKcEyrQsBs+6W6CwGSMpgozslQDKDxFBr7n28s2rNN8CMg/atDt8ZwNqDtXcM53MvwJfIu3d5glBdCZi3ht2Czfs3skwAa/VzkVirZ5WPJEEzg7Vaq/ynHh0yOLrBLqn3AAAAAElFTkSuQmCC',
        };
        engineList.video[1] = {
            name: 'youtube',
            url: 'https://www.youtube.com/results?search_query=%s',
            favicon: 'data:image/x-icon;base64,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/gkAAP5yAAD+qwAA/sgAAP7WAAD+4wAA/u0AAP7wAAD+8gAA/vMAAP7zAAD+8gAA/u8AAP7sAAD+4wAA/tYAAP7HAAD+rQEA/XMABfcJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AMAAAwDAAAMAz//xAI+f8QCfh/kAn4P5AJ+A+QCfgPkAn4P5AJ+P+QCPn/EAz//xAMAAAwDAAAMA////AP///wD///8A////AP///wA=',
        };

        // 图片搜索列表
        engineList.image = [];

        engineList.image[0] = {
            name: '百度图片',
            url: 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s',
            favicon: icon.baidu,
        };
        engineList.image[1] = {
            name: '谷歌图片',
            url: 'https://www.google.com/search?q=%s&tbm=isch',
            favicon: icon.google,
        };
        engineList.image[2] = {
            name: '必应图片',
            url: 'https://www.bing.com/images/search?q=%s',
            favicon: icon.bing
        };
        engineList.image[3] = {
            name: 'Yandex',
            url: 'https://yandex.com/images/search?from=tabbar&text=%s',
            favicon: 'data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAsAAAAUwAAAF8AAABfAAAAXwAAAF8AAABfAAAAXwAAAF8AAABfAAAAXwAAADjBwcEAwcHBAMHBwQDBwcEAAAAAUbq6uurExMT/xMTE/8TExP/ExMT/xMTE/8TExP/ExMT/xMTE/8TExP9ubm6QAAAALcTExADExMQAxMTEAAAAAFrHx8f/x8fH/8fHx/+7u8j/AADS/wAA0v+wsMj/x8fH/8fHx//Hx8f/vr6+7h4eHmQAAAAQx8fHAMfHxwAAAABXy8vL/8vLy//Ly8v/v7/M/wAA2/8AANv/s7PN/8vLy//Ly8v/y8vL/8vLy/+kpKS6AAAAM8vLywDLy8sAAAAAU9DQ0P/Q0ND/0NDQ/8TE0f8AAOX/AADl/7i40v/Q0ND/0NDQ/9DQ0P/Q0ND/0NDQ/2VlZXsAAAAk0NDQAAAAAE/U1NT/1NTU/9TU1P/IyNb/AADw/wAA8P+7u9f/1NTU/9TU1P/U1NT/1NTU/9TU1P/JycnkDw8PUwAAAAcAAABL2dnZ/9nZ2f/Z2dn/np7i/wAA+f8AAPn/goLm/9nZ2f/Z2dn/2dnZ/9nZ2f/Z2dn/2dnZ/6ioqKYAAAAqAAAASOLi4v/i4uL/4uLi/0hI9v8AAP//BQX+/yAg+//f3+L/4uLi/+Li4v/i4uL/4uLi/+Li4v/g4OD7AAAARgAAAETx8fH/8fHx/9jZ8v8LD///HiL+/3h6+P8IDP//lJX3//Hx8f/x8fH/8fHx//Hx8f/x8fH/7+/v+wAAAEIAAABA9vb2//b29v+Ah/v/Ex///3N6+//Z2vf/FiL//ys2/v/r7Pb/9vb2//b29v/29vb/9vb2/8jIyKMAAAAkAAAAPPn5+f/09Pn/NEf+/yA0///Gy/r/+fn5/1hn/f8gNP//jpj8//n5+f/5+fn/+fn5//Dw8OMXFxdBAAAABgAAADj7+/v/tb/8/y5K//9GX///+/v7//v7+/+zvfz/Lkr//zhS///l6Pv/+/v7//v7+/+Tk5NnAAAAGfv7+wAAAAA1/f39/3OM/v85Xf//mqz+//39/f/9/f3/9vf9/0do//85Xf//fpX+//39/f/c3NysAAAAH/39/QD9/f0AAAAAMv7+/v/+/v7//v7+//7+/v/+/v7//v7+//7+/v+VrP//QWn//0Fp///T3PrtPj4+PgAAAAn+/v4A/v7+AAAAACn39/fi////////////////////////////////////////////////tbW1cgAAABf///8A////AP///wAAAAAVAAAAKAAAAC4AAAAuAAAALgAAAC4AAAAuAAAALgAAAC4AAAAuAAAALgAAABv///8A////AP///wD///8AAA8AAAAHAAAAAwAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAADAAAABwAAAA8AAA==',
        };

        //翻译列表
        engineList.translate = [];

        engineList.translate[0] = {
            name: '百度翻译',
            url: 'http://fanyi.baidu.com/#auto/zh/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAC1QTFRFT6b44O/+Uaf44fD+Uaf4T6b4U6j44fD+Uaf4GYr12+39F4n1Gov1////FIj1B6sNLAAAAAl0Uk5T50ThROTm5kPip4USNgAAAFZJREFUCNdVzbEJAmEQBeFtxR6sy9gOrEZL+Tt4i4mB3O1Xg8EhaDYMA1PXBfutLsCr1gFbGffkoegxFKQpad0UnZlWtHGYSfybJL/NwrB9p886L3ifPt+ucPSWYnodAAAAAElFTkSuQmCC',
        };
        engineList.translate[1] = {
            name: '谷歌翻译',
            url: 'https://translate.google.com/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC',
        };
        engineList.translate[2] = {
            name: '有道词典',
            url: 'http://dict.youdao.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4jWNgGFQggps34Y2i2v83imr/78gpvZdgYFBgYGBg8OXkCUMWx2sITOEbRbX/MAMYGBgEkMVxahZiYJCBKTonLX+fkDgG0GNlNYIpnCQsOh8mbsjCYgkTXy8uvR+nAcgK0/gECmDifpw8oTDxMgGhBpwGOLKzu8MU7peSOW/BweFgyMJimc4rUAQT9+TiCiDKC7gwUsBiBezIzoUFGrKr8GnGBgSQDYjg5k3Aq7pFSKTfgoPDwYKDwyGNT6CAZNtx+RuqWYCgAXfklN6jayTo7AEHAIjTnaHLaQtfAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.translate[3] = {
            name: '必应翻译',
            url: 'http://cn.bing.com/dict/search?q=%s',
            favicon: icon.bing
        };
        engineList.translate[4] = {
            name: 'CNKI翻译',
            url: 'http://dict.cnki.net/dict_result.aspx?searchword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.translate[5] = {
            name: 'DeepL',
            url: 'https://www.deepl.com/translator#zh/en/%s',
            favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNwAAAjcB9wZEwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVDiNjZKxaxRBFMZ/b2ZHbWITUxkRC4PnBUW0k1gkoFlMYmIR8R+w0UZBFAvtLAMS0ipC0guCd0GOa23EJGTPkBRCSCNHKiEgMzvPwmjCuiv3lft97zff7BuhQraWTouJLwE0mmf518a7spwUPxwZvlmLms8B4wWrLZhHPvuwUg44N9afGPcc4T5gK4pFgSUv/jHrre8HgKHJE4nzHWBgn/sZdBuYqQB1Q+5rbLR2DUBy1J89GIbEmNmQNW8DqxWAgcS5IQBT5vqYP3H1Gw9AHyosAKECVA4QuKfIPMhHVKygV4OVU8ByT4BDsiI6rWpusdbYUdgpBpLSMeGTRLYx2o5q9kT0ja2P3xU401ODQJz1neYdVRkT9C1gyob/Ngg/3VbifJf9TVg1L2Q43UC1eo3eb8KfB7O7uRf7T782Yo8hXBG4DFwvaRgFFoP4GTqt7u/bFuTOp5dU9BUw8u/BOhqy5fZ//4HvNL6ErHlNkSmFb4e9YM1WMV+5xjxrvM+P99VBngI/qnK96UI66OrpEhcnThatXx/tiqJJdDA6AAAAAElFTkSuQmCC",
            disable:true,
        };
        engineList.translate[6] = {
            name: '金山词霸',
            url: 'https://www.iciba.com/word?w=%s',
            favicon: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVQ4y6WTzUuUURTGf+e87+v3BwxYToupoYVYgViLFiPtIrBNELZsIUIUFEXQqk1I/0JU24oWZRFFiyD7WhhBDWYfq4zCsRETdfwYHL33tHhtdLSF0IEH7r1cnnOe55wjPP1u/EeEYrLuaogpoJi4LREoBhiIQa3Btbb3DLZdQbwQIdSJIC7+8y+IPP5pAKnqEgMdz+lYusGvwm/uVo3Qu7OeOoXsbIkzw9OMLDiQDRLi7CED/gJ7x94R1o2RTF7naFBFz9AEuZLnVKqewcw2Ol/kyS0b601T84AJNbnPMD+BD3ZgzSc5/naKN7OOb4vGpS8FsjMlTqcbMGeYp4wQDyCUabWVeRcwWjS8xc9iytc5T7I6Qpxguq4C8UJMsuqKG6U5WOJgY4B4JTAlckImETAyvYQhiF+DmlfWKA21GdzkVR52tXAuXcuxlognXQn2J2oYmiwhpphfg+IVvJYlGDA+dZvzH4p0p5q43NnCx3ml/9MCDw4laK9VlAi8gFdCMQMzRFb7I5AYVnpeXWTWe+aAtEAARJkDDJ7o497NO5xt7QZzcRsBzMAESq+TRI+2c1iHN0/d/SzLE+Ps3nMEKXhMIMQLSOxs8VkT+rIBdIZNCyKCNTQx3Z6ht5Be9VwIzeIW/pAUxVwEDsz9dWMDQeMu+hb3kfflwhFu5S0+RIiyaVQrwhtmKxXUsQTAWMH8VvavMsMfIrbvQBU3VlgAAAAASUVORK5CYII=",
            blank:true,
        };

        //知识列表
        engineList.knowledge = [];
        engineList.knowledge[0] = {
            name: '知乎',
            url: 'http://www.zhihu.com/search?q=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAGBgAAAEAIACICQAAFgAAACgAAAAYAAAAMAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADunUQC64gQZuuIEHTriRE6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA64gPMuuID+jriA//64gQrOuLGAQAAAAAAAAAAAAAAAAAAAAAAAAAAOuKFgkAAAAAAAAAAAAAAADriBBR64gPkeuJEg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuIEC3riA/u64gP/+uID4MAAAAAAAAAAAAAAAAAAAAA64gQWuuIEGwAAAAA7ZQoB+2UKA/riBCi64gP/+uID+LriBBR7ZMnEO2TJxDtkycQ7JMnCQAAAAAAAAAAAAAAAAAAAADriBBK64gP/uuID/nriBAiAAAAAAAAAADriBA364gP9uuHD3sAAAAA64cNeuuID//riA//64gPuuuID9/riA//64gP/+uID//riA//64cNkAAAAAAAAAAAAAAAAAAAAAAAAAAA64gPnOuID//riBCUAAAAAOuIEBzriA/m64gP/euIED0AAAAA64cNeuuID//riA/G64kRNeuJEwvriBCE64kQquuID7/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAA64gRGuuID/friA/v64kUEeuID83riA//64gPdQAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuID6PriA//64gP0euID//riA+XAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuIEE/riA//64gQnuuID4HrjiEDAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuKFBPriA/+64gPwgAAAAAAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA7ZUqDO2TJxHtkycR7ZMnEe2UJxHriA/r64gP6OySIxHskiMR7JIjEeySIxHskiUJ64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA64gPkOuID//riA//64gP/+uID//riA//64gP/+uID//riA//64gP/+uID//riA9564cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA64cPHOuIEKPriBCo64gQqOuIEKjriA/l64gP/+uJEbDriRCo64kQqOuJEKjriBAu64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADriBCq64gP/+uJESAAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADriA+k64gP/+uHDiwAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA64gQWeuIEEIAAAAAAAAAAAAAAADriRGf64gP/+uKEzUAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA64gQS+uID//riBB6AAAAAAAAAADrhw6Y64gP/+qGDDkAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAA7JAjAuuID9vriA/464kSEgAAAADriA+V64gP/+uGDDwAAAAAAAAAAAAAAAAAAAAA64cNeuuID//rhw1WAAAAAAAAAAAAAAAAAAAAAOqGDD/riA//64cOkAAAAAAAAAAAAAAAAOuIEHrriA//64gP5+uID9/riA/x64gP/+uID+friBDf64gQ3+uID9/sjyIH64cNeuuID//riA/L64gPseuID7HriA+x64gPseuIDsTriA//64cOkAAAAAAAAAAAAAAAAOuJEh/riA/964gP9uuJEL/riRC/64kQv+uJEL/riRC/64kQv+uIEKIAAAAA64cNeeuID/7riA/+64gP/uuID/7riA/+64gP/uuID/7riA/+64cNkAAAAAAAAAAAAAAAAAAAAADriA/H64gP+uuKFBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6XsAA+l8AAbpfAAG6XwABul8AAbpfAAG6XwABul8AAbpfAAG6XsABAAAAAAAAAAAAAAAAAAAAADriBBe64gP/+uID1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA64gQXOuIEHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AD///AIPuPwDDyAEA4YgBAPEIAQDwGPEA+DjxAPg48QD4+PEAgADxAIAA8QCAAPEA/HjxAPx48QCcePEAjHjxAIR48QDAAAEAwAgBAOP4AQDj//8A8///AP///wA=',
        };
        engineList.knowledge[1] = {
            name: '百度文库',
            url: 'http://wenku.baidu.com/search?word=%s&ie=utf-8',
            favicon: icon.baidu,
        };
        engineList.knowledge[2] = {
            name: '豆丁文档',
            url: 'http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jZ3SWUgTcBwH8H+QeDCpLUXR2vKGyZzHFuq8ErMi1PBK01LSBKdplgeYCPWQZWFgGV2GQhbpQ4XNSs3l0XRTZ+pm6hRiTtnmXOKZZfv2EstSevD3/P18H778CNnmOfmYHSSE7NquJylVjq1O3pTQbWH3Y7YpZcNBhn1uFpz/5SzNdhOGOZXQTa2Ji60XJdgr3ibndBWjtXKSi7Ju33lCCHWTsnY28Uoud3tyo5Oruv/Jb/VO/4Hlsj7Pn8VSD5SM+KB83Ae3J5lIr2Z2bcLc41YZtYrAtc7FaPTqz6JPx4dkNg3CmRjUjnFRKHZFUgcb2SNchJ13ufUXZvJMj76a8YfmRwOWvg9ANlcE2VwhZPqLGNJloXM6ETWjQeB3s5Eg9Qcz1D5uozcpf+0+Il6IhELfhKn5z5BqL6BPm4ZeTSrE6kQIp6LwXBGJq4P+yO7mGWh0mrtRO3ma8xpVAeiYiYZcVwOFXoCB2TyoV5qhXHwG3eoHKBcFqFdE4NqwF3JbuF8pFIq1sSD0BDWzeS4EzcrD0K/JAAASdS4AYG19HdolFQCgS12BkgF7ZApYGkIIzVgQdoqW16jh4eUkD+plMdYNK2hTpQIAZLoGNCjifxfcQ26PHfhNbL2lJbH6M2CgRVTtBAvVI87QrkoAAIIvcQCAIV0d6sajAABC1SOc6WCAX++tIITs3Dgi7fJbx/kK+V50Td+FfFaIx6MHMarrxouJK7gpDYdcK8HDwUvg97ERUeBSuekHAk7uKbo+xkKByAH5H+koFrsgt8sBWe1uyGhlIaHRFSltbOQLgxaodub0rV53R2yp3dNSOReZIi5S33OQ9I6D2CYOYgTeSBP5oUh06Jt7kE3kVth4wcmMgrw3Icr8/iPI6Q9HVk8gzrUHGNIfhLTs97Dx/Tf/C0aUi3kge/guAAAAAElFTkSuQmCC',
            disable:true,
        };
        engineList.knowledge[3] = {
            name: '知乎(搜狗)',
            url: 'http://zhihu.sogou.com/zhihu?ie=utf8&query=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=',
            disable:true,
        };
        engineList.knowledge[4] = {
            name: 'Quora',
            url: 'https://www.quora.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQUlEQVR4nO2WXYhUZRjHf8+ZzS0Jw9oUtMSa2V0TI1MJwqiETSzNWnFnxkzpoi5CSqKLCIwGL2Shqz4uFvoAtZCZYEet9GI1Ay+EDRQ1ktWZvNiIVNA+2V3dc/5eNDvunPPOeLS9Uv9X5zw8z/P/vec9vM8Lt3Szy+Im7kkx5W+PTnyWCRYYTBc0A2cMymb0kaCYHmBgQgEKj3OHzvGOxJvA1Ks0k6A4yWPTqlOc+N8AhRRzJfKCedUC4yjGF+bxEz5DwMxALDfjZYmmStMhYGOmzKfXDVBIMVdwUOLuarLHxzaft9Jf40fykywMoI9xX8kz3k2X6L5mgN453HNplKMSM8eFD2ZKPGWGGkCvDMSuGgOPlzKn2FGvxnMFL15iS8gcS7C5kTlAusRujCM1QfHhtw/X/3ciAMUUSYPXQuEL9ggHGplXQY1ijb+4959h3o4NcBEyim7NYde+OwECfowExZrYAIhnHXnlOOYVlRw9Hyy00x4PAGaFAwZ/xLY3/nSF5TM7HoAxPVJsDMf1b064c6VoXzeAOB9lojkuwIiY4oqbcSYegDHogLorLgDelYNrvG5r4rQr3hT14nvgsRBUcuwx38ZzCnjFoBW4U/ALRq/Xwrb0IYYsYFrExRjszFIi5+INEyWip5bgUeXwdrUzA5/diC6J+RIpxFICenSW/uIcZgcBixwmn1mOwPUFIgCrBzgG9IYIWgpf8cQLA/wmjw0Y3Ubt2BXMGxllD2JpzeKNc02T6XGZQ51ZsDPJ/SNwXFzZe4N9mTLPjL0feJrbz/7KdonVDZrLS7C86yR76+U4Z8GLZQa9BM9XxioAgo58im7l/qtZ8gPD0+5jHXCsjrlvxoZG5pW8+sq38qTEDsSMaoHRr8p9wIy/NMoKiS2Oxp2ZMjurC8jh8T4KD7Sr3oi+aaPlX58Pxl84Ysn4PFviVYB8Gx3y6QP2Z8t0XBPAmArtPCCf9cAyYIHEpEqD34GfMRZLtQeWwXdm9AewHpE0+ChTZuN1AYQ1NuNXHOcCQL6V9xSwuWGRsTBb4vCEAIRV6CKhI2yVWFvH/JNsiTei4QmUcnj5L1lj4nWMhxAJjBN49GROsnUivW7pxtFlNM8U1KJDSwUAAAAASUVORK5CYII=',
        };
        engineList.knowledge[5] = {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACRklEQVR4nM3XXWjPURzH8dcfUVsekjuhZVa0mI3kIeUhzcMFkvJ0sSgXLpCSkljZhRQXKLlAUliJkodSyhXSPJQ8jF14KuXG04rR/i7Omf2a/2y/bf/9fet0zu90Ht7nez7fc84vk81mFdIGFHR2DOqqQXPthLxMXLz3Jf4DD/Q1wDTcRXkhAIbjJmbgEkb0N8BnbEIWpTiHgfkGGIhJie+L2B/L1ajLN8ARPMDmRN0+XI3lnVidL4BxWIEhOI4zKEIr1uEFMjiFyfkAeI2puB2/N+AeygQ9LI95ES5jVF8DwAcsxAFBfOW4j1V4HqGyKNGJKHsCsBbLEn1/YRdW4hOGoR6HcEPQhAh6sLcAw3EUV9CIbbGO4ObpeCTs/XbcwknhXPgmeKVXAKPxJJbH4zDeRqgyvMJMnI5t5qBBEGkFTvQW4CnmoipO8gNDsUVY3XXMw8aYvqMl9mvKNWBPRfgANRiDPXgvuL0a1/BMUP8iLMa7zgZKA7BEiO+J2tX8UTj5SrBGuIgI23EEs7VvWU7r8j2QsB2YH8vNeIyHgjceCsfweeFG3IoFONbVoGkAfuKLEGbFmBVTm7UIq23AHdTia48ATp2t/1NOHOTVwpaVCidgZcyrMBKDY11lbL9UiIr0ANHaXquZRF2rEP+NuJCoHxtBKmI+RdRD/fi6LKxu2p0cp1sAaexNTJfSdkwDkPb9nnPFHa3gj9I0HujWitJawT2QyfVrFsOwr//ZMjXr/36dFdwD/9JAXva8oxXcAzk10J/2Gw08e05AgXJ5AAAAAElFTkSuQmCC',
        };


        // 学术搜索列表
        engineList.scholar = [];

        engineList.scholar[0] = {
            name: '谷歌学术',
            url: 'https://scholar.google.com/scholar?hl=zh-CN&q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqklEQVQ4jYWT2UtUURzHL/QH1LMP9hKVNUKFWpP7TDrjU9uEo4WPWlERUbSoueSMaTWjTBCRGV3HiCsSWrTQApVSZBtZWEZSUWZkC3PPne3OzKeHK1NKy4Hfyzl8P+d3vt/fkSRJmpWSVbU9vbxbMZXJSnqZrMx3yErqmrN/r7V+Zf76jjNz5mYXSilZldtKfGBrA5sXcg7Dpg5wX/lzNV+FlmuwsRNy6r9HJFO5v9feBlaXILNWxenT+Pgtzr/W2Oc4azwalqMgLXZ29di9JMXj/xH3P4pybjDKhvYg1qMgpZfKyko3lPk0xr9PF7/4EOfTjwQAiQRcfqpjrlMZeBVjc2eI/FaQ5jlkZWs3qKHENPH7yTg5DYKKExp6DGJxcLRprHILAJr7w5hdIC1wyMquHmNj3/kQN57rALz9Eie/SZBRo/JwLAZAtRLC4jIA7r4pQHqprBS0QkaNysLdAXbKIQAiOjh9Gml7VOS7kaSooGkGwFQqKzYvWFyCgiZBbqPg3mvjRv9ABNPeANeHdSbVBOu8GvYWA9ByMcyKmQCLS5DToFLSKlDuR/kmEox+Moyt6w2TtidAUbPgyKUwZceDWI7MAFhdRgdL9quk7ghw8bGeNPXdZJzKjiCZNSpZtSp5jQKb9zeA1SUw16ms9WqcvBlhcDTG4KsYoxO/ohXhBFWng5jrVCwuQbHnN0B2vaDiRJCJqdzvvtRZfUyQ3SA4dSuCbtjC0JsY5npBYRLg9PfaPEYK14f15NA4fRpLD6jkHxKY9ga4PWKcvRyPk9toGF7sBWmR45S/pN0Y5a6BaLLdroEoGTUqy6oNc99NGk85dCHM8oMCqzuIvQ2k2XPzLAWNX9UiD9i90D0EE8Yo8GQc/A/g2QSMfIHaPsg9DMUe4/dmbrnz8CdxKwtDTtdexQAAAABJRU5ErkJggg==',
        };
        engineList.scholar[1] = {
            name: 'Pubmed',
            url: 'https://pubmed.ncbi.nlm.nih.gov/?term=%s',
            favicon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAQQQABAAEAAQABAAEQAQABIAFAAUABIAGQAbABgAGwAZACUAIgAfAB8AIgAlADgAKAArACgAKwAoADgAVQA1AD4ANQA1AD4ANQBVAEsAWwBKAEUASgBbAEsAhwBqAF4AXgBqAIcAnACDAHwAgwCcAL0AqQCpAL0A7gDiAO4BNwE3AaIRABAAEAAQABAAEQAQABIAFAAUABIAGQAbABgAGwAZACUAIgAfAB8AIgAlADgAKAArACgAKwAoADgAVQA1AD4ANQA1AD4ANQBVAEsAWwBKAEUASgBbAEsAhwBqAF4AXgBqAIcAnACDAHwAgwCcAL0AqQCpAL0A7gDiAO4BNwE3AaL/wgARCABkAGQDASIAAhEBAxEB/8QAGwABAAMAAwEAAAAAAAAAAAAAAAQFBgECBwP/2gAIAQEAAAAA34AAAAAAwEIFhzspJ539Icoiybiv3Z53ucZe9ma0FBN0dm870fDvKqJGYvu+qed2tdZ8KK6Vu/8Ao87jg+lvP0RVxAS416AAAAAAD//EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/9oACAECEAAAAAAXONHbgad/O0uZAAP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgMB/9oACAEDEAAAAAARXQ5lsDHYIroAB//EADkQAAEDAwAEDAQEBwAAAAAAAAECAwQABRESEzKSBhAWICEiMTRTVHOxUWFyshQjNUI2QERQUmJx/9oACAEBAAE/AP5tS0I2lAf9Na9nxUbwrXs+KjeFa9nxUbwrXs+KjeFa9nxUbwrXs+KjeFBbagdFaTjtwaQ42rZWkn5Hm3B1bsyQVnOHFAfIA8+2y/wklKjsK6F1dIyoMzWMkhC+u2RVpuAlxELJ6yehY5kzvcn1V+9KgS0sCQWTqsA6WRxPw5MZCFvNFKV7Jp6FKjtocdaKUL2TkU7ClMsoecaIbXsnIoDNSYcmLoa9so0tmo2LnblxVEa5kZbNWecqDMGl0IX1V8yZ3uT6q/eo7zTdrgoeHUdShveFXGGYUlbfajtQfiK4Qdyt1X/9OgVdULXZ4ASkq2ftpMd/ST+S52/4muEo7l9K6iSVxZDbyf2npHxFXuKgLRLZ6Wn/ALqsFx18XVrOVtcczvcn1V+9XL+H4H1I+00jF4tpR/VM1fxiHAq//p0Cpc16DaoK2gnJCQc0jhFPyAEtbtcJR3L6V0AVEADJNXJQhW1iCTlxXWV8q4ORV6S5RyBsJ45ne5Pqr96mXCO9aYsVGlrGynNQZaoclDo6R+4fEVebhEmIYSxpdUknIq6XGPLhxWm86TfbU+4R5FuiR0aWm3jNJOFA/OrzOjTPw+p0uoFZyKtEdALkx7obZ96UXrnO/wBnFbophlEdlDSBhKRgcczvcn1V+/PaaW86htAypRwKu7yI7LVvZPQkAuVYIWraMlY6y9j6eZO4PNPureQ9q8nKhiuSx82NyuSx82NyuSx82NyuSx82NyuSx82NyuSx82NyoVmTBcLpd01Ywnoo8HUF8uSJJcJOSAMUlKUJCUjAAwB/av/EAB8RAQEAAQMFAQAAAAAAAAAAAAECEQADICMwMUBBgf/aAAgBAgEBPwDtxBbjONIijyFETW6FSWfvO+ntkfXzy22Ss181VNUvof/EAB4RAQACAgEFAAAAAAAAAAAAAAECEQASIAMiMEBB/9oACAEDAQE/APHOWpdYNl8kErOm6rB5x75svhymSSjImoHof//Z',
        };
        engineList.scholar[2] = {
            name: '百度学术',
            url: 'http://xueshu.baidu.com/s?wd=%s',
            favicon: icon.baidu,
        };
        engineList.scholar[3] = {
            name: '知网',
            url: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_value1=%s&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&singleDB=SCDB&action=scdbsearch',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==',
        };

        engineList.scholar[4] = {
            name: '万方',
            url: 'http://s.g.wanfangdata.com.cn/Paper.aspx?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVQ4jdWSvY4BURhAPwoS8TuTqESC3lN4DZGYVqGTaPQa4g1UYjqxdN5EoURI/CQ0M9/ZYnYya9fsRrHFFqe5Jzm5936ftEXatog9EZm+ii1iy1xkQbUKlgXNpodlQb0O8TjUao/O940GJJPIRGRKr4fCd0wTXa2eO4BK5SPQ6XiHqh6Ans+oYaCz2aPz/e0GpdJfBk4nL7BcPn+C60K5/MsNTBMdj9HDAd1uA3Y7dLOBYvGHwPWKFgqoSCiI/BC4XNB8HrUsdDRCB4OA4RDt98EwwgOcz2guFzpG/sEYXwp0uziuq59x73d1DEOdxUK/Osd11XUcDfag1UKPx2DO+z2s194nhuwB/h7MRd6IxSCbhXTaI5OBVAoiEUgkHp1PKgXRKO8NfBp7UCxd2QAAAABJRU5ErkJggg==',
        };
        engineList.scholar[5] = {
            name: 'EBSCO',
            url: 'http://web.b.ebscohost.com/ehost/results?sid=8e76c941-084d-4b93-b05a-d5f182196017%40sessionmgr102&vid=1&hid=128&bquery=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jZWT3UtTYRzHT+w4pzddeRFdBAbd1Z8giXtJz9mKvBDCxMqkrK57u6kEyx13zjHWIl8TEbMptaLpZMeMCgdBS8dSRC8WWAS9UJRS1j5d7AWnjuqB78UPHj58n+f7+wpFLp0il45Z1hBs7nVS0krPdoXM/YyEIpdOgaRSWt/JGZ9BvWeUOiXIUXWMxvZxGrQQTd4wTd4wrkv3sDh1LOsBYpVKaX0XPaEYmfPx6wqHlSAHLt/nlDdMZO4tyWSSHXUdmKrUXECxS0eUVIS9V3kYWQTAiCYQKlpT1itaESs9BKYWqHU/QrApuYDsYFMYnJwF4PH0G0RJxeLUKJQ1BKubbYdusvNIF2ZZzQOwKww9mcsCTJKKKKmU1PgoPzvElkoPBZK68RM3AxjRRMp++TWO6yFGns3nT2EzwIcvyzyILBB+mWD1128GJl7nvP2vgOjie6zn/Ow77+d5fInhp/P/BzCiCQSrG6GsBfsFP/1GHMHRhsX5j4BMCoWyxtaD19l1rBuzrGGWVYr3t+cH3Jmc2xijU8NU5UFwKFwZmGLPyb7sMmUBZllDKGvhbtrBxKv0ItmVlMpaqG4O8O7TN7bX3kKU1gDMskZJjY/G9nG+r/wEYPnHKg1aCMfFYaqbA6gjLwCYX/pMYdpVFmCq9LD7xG36jTg9oRgdwWm6x2L0heN0js7QOx5jcHKW3lCM0zcMxPVdyKmzdY3SFc6ptKMtJ4U/fkBXz/LD6BYAAAAASUVORK5CYII=',
        };
        engineList.scholar[6] = {
            name: 'WOS',
            url: 'http://apps.webofknowledge.com/UA_GeneralSearch.do?fieldCount=3&action=search&product=UA&search_mode=GeneralSearch&max_field_count=25&max_field_notice=Notice%3A+You+cannot+add+another+field.&input_invalid_notice=Search+Error%3A+Please+enter+a+search+term.&input_invalid_notice_limits=+%3Cbr%2F%3ENote%3A+Fields+displayed+in+scrolling+boxes+must+be+combined+with+at+least+one+other+search+field.&sa_img_alt=Select+terms+from+the+index&value(input1)=%s&value%28select1%29=TI&value%28hidInput1%29=initVoid&value%28hidShowIcon1%29=0&value%28bool_1_2%29=AND&value%28input2%29=&value%28select2%29=AU&value%28hidInput2%29=initAuthor&value%28hidShowIcon2%29=1&value%28bool_2_3%29=AND&value%28input3%29=&value%28select3%29=SO&value%28hidInput3%29=initSource&value%28hidShowIcon3%29=1&limitStatus=collapsed&expand_alt=Expand+these+settings&expand_title=Expand+these+settings&collapse_alt=Collapse+these+settings&collapse_title=Collapse+these+settings&SinceLastVisit_UTC=&SinceLastVisit_DATE=&timespanStatus=display%3A+block&timeSpanCollapsedListStatus=display%3A+none&period=Range+Selection&range=ALL&ssStatus=display%3Anone&ss_lemmatization=On&ss_query_language=&rsStatus=display%3Anone&rs_rec_per_page=10&rs_sort_by=PY.D%3BLD.D%3BVL.D%3BSO.A%3BPG.A%3BAU.A&rs_refinePanel=visibility%3Ashow',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jZ2TPYobQRCFvyNUMpGTjgQbGAqBEZs1i5AD4VWzBoNgF1cihB0NONyk1/mgEwxzgmFuMHMD6Sa7RxgHQ8uzI+HAFRXUT79+7xVMQjPUO/zxFyfv8ONcM3Tafw4nuHZPlxZM62lBu6dzgrsYNsWKNQcA/YAW9xyKew5xSSy/UhWfh1qx5mCKvVsS74ivz7wB2CcsrogAAiIgmqGmWP+bHuD1mbd4N/RgitVbGic4zdBwQxAQm2NxSSwfqI4/OYUZwRSrv9FohtZbGlOMckPVv9ALSP1IAxA+EsYQNUPTYPs08NS/0JcbKvIFeZgRNEM1Q53gwg1hSqIpZoqVG6roiWFGyBfk9JG+j/Te4cOMkN+SX5PLO3x+OzzmHT7NnRFETyw3VKZYviC/QDAfmE9IzwgSB+P/HXecxiic4GyOAdSPNAJy5mCsQvtEFz1RM/S451RvaeKSmIZtjnmHF5CzClMftN/pTDHN0OQDgLj6u+idD5JMyYkCUj5QFevBhcUXDnE1oBKQ5MQLop3g2h1dgnlNBZtj7e7KLYwjHVP7gy5dY8r/eY3/G38A1vO4VlociLQAAAAASUVORK5CYII=',
        };
        engineList.scholar[7] = {
            name: 'JSTOR',
            url: 'http://www.jstor.org/action/doAdvancedSearch?q0=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADl0lEQVQ4jS2RS0zbdQCA/3cvJh71ollMICN0FhpwbBlZx+Zg0NdC3/23pbQ8B91YGQOtCAOZJQrIaillLVDgJ6+BPMTJU91Bl7mwOBQQjEuGzJMHTbx8HvD+5Uu+fFLGSy/XlipVQlaohC1NKeT0TOFSZgm3MlvYUtOF+ViKMB9LEbbUdOFWZgk5TXnEKVRCTkkTkkeRMb/cEGS+sZb1T5r54sZVRpwuhq1ONsUU+6tr7C2v8jg5TtLh5uv2Bta7mllqaWDRX49kS1OKe9eqCBvP0u+8RNynI+rIp/nEcdqyT/HX4Qv+/fsfomYnd4xq4j4NAyWFDFboSJjsSLbjSjEbqKXPdpGBEi19lgJWoteZD1XRVZTD1uoyz59uM1hup18uoM9eSMSSz0CJjmGHG0lWqETCZKfPns9Mq5fuwrOETRfpNeQRNqp5srjEwdYO4zfKGasz06vPY/ZWGZ3nThHTWpBsqQqx8tF7DFYYmGnx0u8o5MPT2UwFS2jPUbI5t8Qf27vEnBbW4wG++tSPCNiZft9DTP+/YLUzyFCFHlHvYK6jgpD6FBFrAWHTeX76coXDnT169VrmbvuYD1VyS6Uk5iwiZrAiyYpMMSK7GHAXMtHkouN0FiN+MzOtpfTocvnt4fc839ohJpu569EwVFlM3GsgYslnrNSH5M7MEuELOlpU6QyU6Ih7DWwM3iTpNxPKO8mzzR85+GWXXq2GHl0uC53VDFYW06vPY+HdAJIt9S2xGAww21bK/fA1OvNOU/vKa/Ro1ISNeWx/84DD3T367UaGqi8T9+rp1qi5/urrDFqdSI40pZj2VzHR6GC2vYzlSB3JKya+TTYx0+Zh/4eHHGztcNdtZaJJRtTZWI3VE3UUEdWYkFxKlejXGmlVKYi5tEw0ygx4tIzV2bhzWc32xgN+f/yEhM9BxPIOwzUmQuocItZ8Rj1eJGuqQiwG61kIlSMCNrouFXA7921C5zL5rDifP/ee8WhqluYTGYiAlc8bZKKOIkZqTExUVx1tvN92kz7bBbo1ZxitvcLPa+tMNtSxtbzMi1/3GaupYbLJzr0PSrljOM90sIS4V0//UUKWGHN7SZQbGKoyErUU8V0iydOVNR7dmyPhKmPEb2Ej0cjoVTsfX8il48xJxhucDFncSNY33pxfvBJg1F3GbN11kg4Pw3Y3k9V+hK+SIYsT4a1gzFNBUi5lxFXGqLuMqepaplw+/gNcwmcGmhKGRAAAAABJRU5ErkJggg==',
        };
        engineList.scholar[8] = {
            name: 'Springer',
            url: 'http://rd.springer.com/search?query=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4jbWRsQ2EMAxFMwjFzULHJvR0GeAaKL2GV4jEANmBiorqOipf5ejH+Dg46b5kRYLv5x8niKNl3SQSC6fs/a4UvOamG0pxyrKs231A24+H8xKg7cdi1ukKjcTngEhcjBobT72SC0ADmjA6pyxNN/gApHPKEoklElcAHYJLDRpdjXaJNrL9FjCaNnrTTwEK0RfAl7gMsCBPH3eAzfYaWN5eDgnuqgLs8ySv5+Nr7fP0J8AvegOhkGr6AYHSEgAAAABJRU5ErkJggg==',
        };
        engineList.scholar[9] = {
            name: 'Elsevier',
            url: 'https://www.elsevier.cn/zh-cn/search-results?query%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/////bAD/aAD/ZQD/lFr/YgD/+fb/waD/1sD/cQD/XwD/7eL/m2H/n2//6uP/18b/zrH/vJj/9ev/s5T/x7H/bwr/dR//m2n/z7b/38r/5ND/8uf/+fL/59j/oWv/gzn/VgD/x6n/h0D/jlH/gS7/oGn/r4b/2sP/p3b/eyn/roD/gDn/kFL/0bn/onj/hUP/ehf/to//kV3/kEtE6u+iAAAEaUlEQVR4nO2di16qQBCHYbf1gpbCKRWBvGSalZWn93+3owho/qRj7C4r0/97gGm+QGBnL2NZAAAAAAAAAAAAAAAAAAAAAAAAzOO7MSvTeehjKvgGp286D220mL2FXZtORBsTQd3wgfo1DHaCJRv6s2m73X6cz+fr2w2D1WrV8IfDYRR4nheq/VvJTVqyYcdhW/gOkeF8wW6qwLaNGAq7dGAIQxj+OsPx5lEpNp+L2ycqScMNwXAxuP3zdDVd9u5sxlNdfb4mv2nCIPI7A/f5/urhpdfMy1AUgl2E4SFh+Hr6MrJVowCLEbs0Q8u6Om3Ia4WiPZE3nHDqhvv3ElXDFvlraJH/HVozRt3wnrxhnVM3bAjqhoFD3dAi/zu0Rkaqid+h2vCNvKHLqRuujFSEv0O14Q15w7BJ3dB6v7S5J+WGffKGa07dsHFpc8DKDSPy19C7o25o9S5stYl6w8mFrRhSb3hpwLD6wLD6wLD6wLD6wLD6wLD6wPAcWjGRthzlUGAYxuvHmNPSl6UMCgz9XWWGsOGtoG6YLPUibPhO3TApHxI2TErAhA27grrhM/lrmGxWo2tYS5eKkzVsOdQN0wcNXcM5p244ZdQNs5XdFTNk0c15+KKihvbRFtpc9tviqmb4c2BoChjCEIbm+b2G7FyqasjaZ7LfZVsxQ352AKeqhmd/eX+QH1u8kTeskx8BD8nXaWrk79Jstxpdw2vyhi75qr5PfmYmIP+ksV6ozwFbbfKGdfKrTTrkDQMnPiNqTNfQ6u5QfIqmKrA2sfrAsPrAsPrAsPrAUIZauMX0/0qjYbjsbbh7ko8khUbDhrONzdfykaTQaLir94uBfCQpNBo249B8IR9JCn2G0a7cz03vFtJnmB5UY3rYqM8wmVhkCpKUQpthlJzEs1SRpQzaDJNiP3tVkaUM2gyTvUL8WUWWMugyTJoi2byuJE0JdBmm/WZEV0maEugyTPeZCF9JmhJoMgyy9QuemjyLo8kwvUltoSZNCTQZfqYHtX6oSVMCPYZedmDyVFGexdFjeEnHeusxzDp58LmiPIujxXDfIsH8C1+P4TozFA1ViRZGi+Fyv6z2RlWihdFhuN8LZbNAWaZF0WF4ncVkH6ZH+LmGQsIw3IdkI3WZFkWDocv3hn/VZVqUHENHwvAgDLtXl2lR8gyLDwkmB536jBe8rXzDwlXOxt3hzW58/Jv/OyxWqY7cJf8SpqM43QLkvS1+/D3pLdzXpuBfwzGTBe+a17rxu+7stKHNm69v8/W6PvlfE73BxJ1ff85s59gupvwXftiKOqv68+PV+7LJhDiZVfr/Z0ftg3PgcbPI0yF6pXlFi8Ht/P5ztm1gWWK7TvZSkmBnnHYhLcHqi2FZBW8TvWRjeFkz3OYMyxr/GjMUZR09b86wrIL3seHBLl6ulXFZr8POWGQHebBtE/vZaDT6bPf7/bc/MW5dD25JglY4HA4jzzM+gwAAAAAAAAAAAAAAAAAAAAAAAAAAAIAe/gE6wVjK0TFOpgAAAABJRU5ErkJggg=='};

        // 自用 该列表默认隐藏,
        engineList.mine = [];

        engineList.mine[0] = {
            name: 'GitHub',
            url: 'https://github.com/search?utf8=✓&q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.mine[1] = {
            name: '菜鸟教程',
            url: 'http://www.runoob.com/?s=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=',
        };
        engineList.mine[2] = {
            name: 'GreasyFork',
            url: 'https://greasyfork.org/scripts?q=%s&utf8=✓',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.mine[3] = {
             name: 'Alternativeto',
             url: 'https://alternativeto.net/browse/search?q=%s',
             favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADVklEQVR4nMWXXUhTYRjHf1aO3OJMt2k1FDFbCSFZkgaVeGEQgwIr+4CC6IMkow+I6qqL6iKCgqBAiEq6KK3bjC66iG6KPi0wrTWLNtZ07hyd+8jvLt4waefsbHPVHw68e5/nfZ7/ed73+Z93WZZjdyb5j5iTrGNscoLYQC+E+iGswEjst9GQA0YzmMxgysViys0sATkUAG83DEfVHUZi4hnwC39zAdiXYJlrmjkBORQA9xsA9tWtYnPNKlYuc7DAmjfl4w8qfP7qpbPHQ2PbI+jvg1AA2VGlW40svTMg97yFwT7untzDDmet7htFojGutj7g9O12MbGkOiGJWboRwzIAG2urdV0BTMYcTu1toLlpm5jwfUror09gfGwqcCo42OCk0lEIYUVsowb0D+G8PAgrtD58Qm31ct50uvD09vPy4xcAHPYCtq5fQ2mRPW7pifo6dl5sEV0j5adJYH4JhBURSAP3n73j1fXzcfNli4rEIDKguVZ3CyxSPpSuBItd9LvFLqoyDa9dXjq63XFrK8pKxSCsaMZPSgcsUj7y7GzR67JPTNokLjjXUb64GHuB9XeyFJGcECnf4et7ACodhZzdvQlnTVVaCVMmMD15c9M2DjY4M5I4KQLy6DB4uwBoP3soY289HYkPoecDjI1ysr42YXJ/UCESjWna0yIg/4jAYB/YJM4c2K7q4/b42H/+Ggu3HMf1zZcWgTlZYxrMh3oBuOBcp6qCHd1uVjSeSzqRVh7tLYiGAShfXKxq3n/plhj8oQmpQptAbAiApSWFcSZ/UOG1ywuGuTNKrkNAVEBN4/0B8YXEkNoHSg1JX8lUMTkxYwLaFZgtuKm1V0VZKdgkiAyKxyalLcXaBExmAN52fVY1tx/ZJUjYJDFOE9pbYJQgFKSzx8PayvI4s7OmiskMKKNuBRrbHqWtcjMiYDVKIFmhP8TRyzf/PQEA7A4w5HDj8UtOXWlJWAm3xxd3KXn49IUY/KqmGrKsh28kvJYHh6Pgfgfjo2CTaN6+gbrVFVP64Pb4ePy8g8Zr97SDFJVhzS1IjwBAcHQEfC4IBRM7msyiLaf/tizUTA5JCpE12wDFywhGQzAYEEl+KSU580Qic744NykiJSW0GiXRnhmE/h+Tv4yfzZcbwYt6jlUAAAAASUVORK5CYII=',
             blank:true
         };
         engineList.mine[4] = {
             name: 'Userstyles',
             url: 'https://userstyles.org/styles/browse?search_terms=%s',
             favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABqElEQVR4nO2XsWsTURzHP99fLoPUSWjqaOnuEBK6iA6ucQuVdHCw1Ek3d59/gasIrhlCECSugohLJVzR1SFjbAqCiFN793PxGlFj9WzvLf1OB/d77/N5j9973IkfEjzYs93PG3I2cVpAw6HGgrxvPRLAtHPFF9VIyoAZ+Bipv9K8PlAI+dH74uHyu/urHGRDoLlosjICvzFKhboXR68nAFbAdZjt/Au8dNyb7r7z8cbVVQALHoyDbOjO8qnD5xbLjg89BLPnu19uUsXKf3Hw5l76csNyz3uVw+cSm/a92yNFLQMa8QRo2J/O+WnH3WsWC14kOYlJDEJUgZUXbx5GFWg/mVyLKuD54auyY6M34ZnAmUCCFGIK6PiS49N6/OHvP8l+SvL16YUHZQcvbX0qfQMeCeRe/h4H/lsgehOaRBYLLikzXLNYAg4zA8axBISPzVE/loBLfTu/dXcgKa2cLqWd7bWBSSGv1ZMu0n51cPbNkm6QcgM4d2tvktST9Up2QkrN6utvty/Nf04LiaXb99pgPaGR0PQkjqikDGkqMcLU69xZaxdwgG83NodGaQLg6QAAAABJRU5ErkJggg==',
             blank:true
         };


        //搜索Pro,
        engineList.webpro = [];

        engineList.webpro[0] = {
            name: 'PDF文档',
            url: 'https://www.baidu.com/s?wd=%s%20filetype:pdf',
            favicon: icon.baidu,
            blank:true,
        };
        engineList.webpro[1] = {
            name: 'PDF文档',
            url: 'https://www.google.com/search?q=%s%20filetype:pdf',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[2] = {
            name: '文档',
            url: 'https://www.google.com/search?q=%s%20filetype:pdf%20OR%20filetype:doc%20OR%20filetype:xls%20OR%20filetype:ppt',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[3] = {
            name: '搜T',
            url: 'https://www.google.com/search?q=intitle:%s',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[4] = {
            name: '搜Text',
            url: 'https://www.google.com/search?q=intext:%s',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[5] = {
            name: '搜Url',
            url: 'https://www.google.com/search?q=inurl:%s',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[6] = {
            name: '大学网站',
            url: 'https://www.google.com/search?q=%s%20site:edu.cn',
            favicon: icon.google,
            blank:true,
        };
        engineList.webpro[7] = {
            name: '大学网站',
            url: 'https://www.baidu.com/s?wd=%s%20site:edu.cn',
            favicon: icon.baidu,
            blank:true,
        };
        engineList.webpro[8] = {
            name: '政府网站',
            url: 'https://www.google.com/search?q=%s%20site:gov.cn',
            favicon: icon.google,
            blank:true,
        };


        //药研检索drugx,
        engineList.drugx = [];

        engineList.drugx[0] = {
            name: '审批报告',
            url: 'https://drugx.cn/%E5%AE%A1%E8%AF%84%E6%8A%A5%E5%91%8A%E6%A3%80%E7%B4%A2#gsc.tab=0&gsc.q=%s',
            favicon: icon.drugx,
            blank:true,
        };
        engineList.drugx[1] = {
            name: '制剂处方',
            url: 'https://drugx.cn/%E5%88%B6%E5%89%82%E5%A4%84%E6%96%B9%E6%A3%80%E7%B4%A2#gsc.tab=0&gsc.q=%s',
            favicon: icon.drugx,
            blank:true,
        };
        engineList.drugx[2] = {
            name: '说明书',
            url: 'https://drugx.cn/%E8%8D%AF%E5%93%81%E8%AF%B4%E6%98%8E%E4%B9%A6%E6%A3%80%E7%B4%A2#gsc.tab=0&gsc.q=%s',
            favicon: icon.drugx,
            blank:true,
        };
        engineList.drugx[3] = {
            name: '药研搜索',
            url: 'https://cse.google.com/cse?cx=cabd89e5a5da8b834#gsc.tab=0&gsc.q=%s',
            favicon: icon.drugx,
            blank:true,
        };
        engineList.drugx[4] = {
            name: '药研信息',
            url: 'https://drugx.cn/%E8%8D%AF%E5%93%81%E6%A0%87%E5%87%86-%E6%A3%80%E9%AA%8C%E6%8A%A5%E5%91%8A%E6%90%9C%E7%B4%A2#gsc.tab=0&gsc.q=%s',
            favicon: icon.drugx,
            blank:true,
        };

        // 文献下载,
        engineList.sci = [];

        engineList.sci[0] = {
            name: 'Scihub',
            url: 'https://sci-hub.ru/%s',
            favicon: 'data:image/jpeg;base64,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'
        };
        engineList.sci[1] = {
             name: '企鹅文献',
             url: 'https://alternativeto.net/browse/search?q=%s',
             favicon: icon.drugx,
             blank:true
         };
         engineList.sci[2] = {
             name: '熊猫文献',
             url: 'https://doi.qqsci.com/?doi=%s',
             favicon: icon.drugx,
             blank:true
         };

        // 导入列表
        var engineList_plus = [];
        engineList_plus[0] = {
            "status":3,
            "version":1,
            "message":"应用app下载,由奔跑中的奶酪整理",
            "name":"应用",
            "engineDetails":['应用',"app_xin",true],
            "engineList":[
                {
                    name: 'Github',
                    url: 'https://www.runningcheese.com/go/?url=https://github.com/search?q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEmklEQVR4nK1XX2hbVRz+vnNv02xrIxu9N1mSlTiuIL26PdStiMjciyjq9ElkTwMfrMhEdOjDYEunU/BBJw71QXwUpA+WoQznZGygOOdEO6aCQWKbP7e5rptpM9qkyc+HJttdctNma76nnN/vnO/7zrknv3MO0SFs2w7Muu5uAfZAZAhAVMgoAFAkByAH8ncCJzYZxpnLly+XO+Hlah0ShhFZIA+LyF4AoQ79Fkl+HhQZS7uuc0cGLMvqnS8WDwJ4VUQ2dCh8KzlZAvBeXyh0NJVKLXZsoD7rCREZuRNhHyPngyLP+K1Gi4G4aW5bEvlagHg3xD1CGZ18IlMoTLY1kDCMyAJwodviXhNBYId3JVTjh2VZvQvkhFecwB8EviB55Q70rhEYJ/BLIyBAfIGcsCyrt8XAfLF4sPmbU6ljjus+d+/QUARKPQ9y2Tk5D/ISgXMEzoKcBPDfcoqzBPYPmGbYcd1nSR71corISH1zNyZ5Y9Olmnc7NW2n4zgXGm3bMPquaNrg6Ojon8lkstZEzHg8fo+mae7U1NTVRjwcDt+NWu3vW3jJUlDESruuQwCImObHIjLavIZK1x/I5/MX/da3U0Sj0cFqpfJPc5zkJ06h8KKybTtQLzKtqFaH1iIOALVazfaLi8he27YDatZ1d8OnwpEsQdPOrdWApmk/kfzXJxWadd3dSoA9bcYeyefzLUt3u8hms1cg8rpfToA9qn6wtEAPBL5cq3gDwQ0b/LlEhhSAaHOcZGl6ejrVLQPpdPoaySmfVFQ1jtQmFEhKtwwAAERmWkJkVNFTjG72lYGuigMA2cJJQCkAfju0PxwOm93STiQSQfh8agCuAuB7YVAij3bLwOL167tEpNcn5SiK/Og3SEReFpFVb0ydQIBX/OIUOa9Anm0zaMfmcPi1tYpHDGOfiDzmmyTPqtDGjd8CmPM1IfJuxDSPDA8P99yucDKZVBHTPCDAp226zG0SOdU4jI6LyEt1V+9r5M9VkTcgsg0ACEyD/EwB36tA4GImk5n1Y9y6detdpVJpWAEP1kT2QcRqZ5BKHXdmZvYrANBFjpEsAwCXB7oDIg+B/BUABNgiIoerIqcq5fKJZDLZ8tcFgOtzcxOo1b6r1WpvrShOLvaIHKtPbhkR0xwTkUP1ZlEPBGyS65bK5R+8dUFT6unczMwJP+JIJPKIVKtn2gl7DIw5hUIS8BShvlDo7frNBgBC1XJ5LJPJ/BUUuZ/kAQAfKKVeWN/f/007Yl3XJ9vlPOqTfaHQOzea3lw0Gt1SrVTOA9gMoEpNe8pxnJOrknoQNowKAL1NOq/19IzkcrlpXwMAEDPN7UsiJ2+YIE8DOE1gToDww7t2HR0fH6+uYGAJgOYnrpOPZwuF37xB30ITi8XiS5XKVxDZ3pwbMM3eld59YcOoovl8IS9puv5kLpdrORF9d3M2m830h0IjJMdI3vKkKpVKvmO8cjd1WSb55rr163f6ibc1AACpVGrRKRSSPYBNpT4EUAQ5n0gkllZUJ6+CnCf5kR4I3OcUCofS6fTCKqZXh20YfYODgxtX6xeLxeKWZXX6isb/mQzVdYidKdgAAAAASUVORK5CYII=',
                    blank:true
                }
            ]
        }

        var settingData = {
            "status":1,
            "message":"$相关说明$(status: 这个在将来或许很重要)..."+
                    "(version: 若有新功能加入,靠这个版本号识别)..." +
                    "(addSearchItems: 允许更新时,添加新的搜索网站到你的搜索列表)..." +
                    "(modifySearchItems: 允许更新时,修改你的搜索列表中的项目)..." +
                    "(connectToTheServer: 允许连接到我的服务器(更新列表,将图标转换为base64等),将来更新使用或永不使用)..." +
                    "(closeBtn: 设置页面右上角的“关闭”按钮是否显示。true显示,false隐藏)..." +
                    "(newtab: 新标签页打开。0为默认设置,1为新标签页打开)..." +
                    "(foldlist: 折叠当前搜索分类列表。true为折叠,false为展开。)..." +
                    "(settingOpacity: 设置按钮的透明度,值为0-1之间的数,0为透明,1为完全显示,中间值半透明。注：-1为直接关闭按钮,关闭之前请确定自己知道如何再次打开它)..." +
                    "(debug: debug模式,开启后,控制台会输出一些信息,“关闭并保存”按钮将不会在刷新页面)..." +
                    "(fixedTop: 将搜索栏固定到顶端。 true开启,false关闭)..." +
                    "(fixedTopUpward: 固定顶端后，搜索栏下拉不会出现，只有上拉时才出现。 true开启,false关闭)..." +
                    "(baiduOffset: 在百度页面鼠标划过的菜单会出现位移,若有使用其他的style样式,可以修改这个来修复二级菜单的偏移)..." +
                    "(getIcon: 自己添加搜索后获取图标的方式。0为自动，能连接谷歌的情况下用谷歌获取，无法连接的情况下，域名加favicon.ico获取；1为域名加favicon获取，2为使用谷歌获取，3为使用dnspot的服务获取(不建议使用)。或者添加网址，关键字使用%s代替，未测试)..." +
                    "(allOpen:一键搜索，点击相关分类后，打开该分类下的所有搜索)..." +
                    "(center:是否居中显示，主要是为了兼容脚本 ac 百度  ： 0 不居中，强制在左。 1, 强制居中 。 2,自动判断)..." +
                    "(icon: 图标的显示方式, true显示抽象图标,false显示网站图标。当脚本中不存在抽象图标时,显示网站图标)..." +
                    "(transtion: 是否有动画效果, true为开启所有动画效果,false关闭所有动画(包括模糊效果)。)" +
                    "(engineDetails: 第一个值为分类列表标题名称,第二个值与enginelist相关联,必须匹配,第三个值true为显示列表,false为禁用列表。排列顺序与跳转栏上的显示顺序相同，可以用它将分类列表按自己喜欢排序)..." +
                    "(engineList: 各个搜索的相关信息)" +
                    "(rules: 已弃用--将搜索样式插入到目标网页,同脚本中的rules设置相同,优先级高于脚本中自带的规则。自带了360搜索,可仿写)...",
            "version":4.05,
            "addSearchItems":true,
            "modifySearchItems":true,
            "connectToTheServer":true,
            "closeBtn":true,
            "newtab":0,
            "foldlist":true,
            "setBtnOpacity":0.6,
            "debug":false,
            "fixedTop":true,
            "fixedTopUpward":false,
            "baiduOffset":-120,
            "getIcon":0,
            "allOpen":false,
            "center":2,
            "icon":false,
            "transtion":true,
            "engineDetails":[['网页', 'web',true],['翻译', 'translate',true],['学术', 'scholar',true],['药研', 'drugx',true],['知识', 'knowledge',true],['图片', 'image',true],['视频', 'video',false],['搜索Pro', 'webpro',true],['文献下载', 'sci',true],['其他', 'mine',false]],
            "engineList":{},
            "rules":[{"name": "360", "url": "/^https?:\\/\\/www\\.so\\.com\\/s\\?/", "enabled": true, "engineList": "web","fixedTop":50, "style": "padding: 10px 0 0 120px;margin-bottom:-10px;z-index:3001;", "insertIntoDoc": {"keyword": "//input[@name='q']", "target": "css;#tabs-wrap", "where": "afterEnd"}}]
        }
        // --------------------可设置项结束------------------------
        // GM_deleteValue("searchEngineJumpData");
        var getSettingData = GM_getValue("searchEngineJumpData");
        if(getSettingData){
            // console.log("本地存在列表：",getSettingData);
            if(!getSettingData.status && confirm("设置发生错误,脚本将会复原出厂设置")){
                GM_deleteValue("searchEngineJumpData");
                window.location.reload();
            }

            // 查看本地配置信息是否完整
            for(let value in settingData){
                if(!getSettingData.hasOwnProperty(value)){
                    console.log("属性不存在： ",value);
                    getSettingData[value] = settingData[value];
                    GM_setValue("searchEngineJumpData",getSettingData);
                }
            }

            // 获取版本,用于搜索列表更新
                // console.log("当前版本号和目标版本号: ",getSettingData.version,settingData.version);
            if(parseFloat(getSettingData.version) < settingData.version){
                console.log("版本过低,开始更新,当前版本号和目标版本号: ",getSettingData.version,settingData.version);
                // 1.96 更新 修改a站搜索链接
                // if(getSettingData.modifySearchItems){
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"http://www.acfun.tv/search.aspx#query=%s","http://www.acfun.cn/search/?#query=%s")
                // }
                // 版本3.02 添加 自用网站-搜狗表情
                // if(getSettingData.addSearchItems && getSettingData.engineList.hasOwnProperty("mine")){
                //     // engineList.mine[8].disable = true; // 对于老用户,默认禁用的状态添加
                //     getSettingData.engineList["mine"].push(engineList.mine[8])
                // }
                // 4.01
                // if(getSettingData.addSearchItems){
                //     if(getSettingData.engineList.hasOwnProperty("music")){
                //         getSettingData.engineList["music"].push(engineList.music[6])
                //         getSettingData.engineList["music"].push(engineList.music[7])
                //     }
                // }
                // 4.03
                // if(getSettingData.addSearchItems){
                //     // engineList.mine[8].disable = true; // 对于老用户,默认禁用的状态添加
                //     if(getSettingData.engineList.hasOwnProperty("translate")){
                //         getSettingData.engineList["translate"].push(engineList.translate[8])
                //     }
                // }
                // 4.04 更改 b站图标
                    // 导致了5.23.7 的严重bug, 致使无法使用。原因是用户已经删除了相关列表, 但是脚本依旧去读取,出现了读取错误。
                // if(getSettingData.modifySearchItems){
                //     getSettingData.engineList.video = modifySearchItemsIcon(getSettingData.engineList.video,"http://search.bilibili.com/all?keyword=%s",engineList.video[1].favicon)
                // }

                // 更新本地版本 其他相关信息
                getSettingData.version = settingData.version;
                getSettingData.message = settingData.message;
                GM_setValue("searchEngineJumpData",getSettingData);
            }

            engineList = getSettingData.engineList;

        } else {
            console.log("未发现本地列表");
            settingData.engineList = engineList;
            console.log("初始化：",settingData);

            GM_setValue("searchEngineJumpData",settingData);
            getSettingData = GM_getValue("searchEngineJumpData");
        }

        // 处理enginlist.detail的相关信息
        var engineDetails = getSettingData.engineDetails;
        //列表分类显示情况
        var getDetails = engineDetails.map(function(value,index){
            return value[2]?index:-index;
        })

        // 列表分类的key value
        var getDetailsL = getDetails.length;
        var details = [];
        for(let i=0;i<getDetailsL;i++){
            details[getDetails[i]] =  engineDetails[i];
        };
        engineList.details = details;

        reloadDebug(getSettingData.debug);

        ///test -------------- 测试 start
        debug("searchEngineJump test location.href: ",window.location.href)
        ///test -------------- 测试 end

        // 更新已过期的搜索链接
        function modifySearchItemsFun(engineList,oldURL,newURL){
            for(let value in engineList){
                var item = engineList[value]
                for(let i=0;i<item.length;i++){
                    if(item[i].url === oldURL){
                        item[i].url = newURL;
                        return engineList;
                    }
                }
            }
            return engineList;
        }
        // 更新图标
        function modifySearchItemsIcon(engineList,url,newIcon){
            for (let i=0;i<engineList.length;i++){
                if(engineList[i].url ==url){   //用户可能自己更改网站名称,所以此处用url来匹配
                    engineList[i].favicon=newIcon;
                    console.log("发现旧的图标");
                }
            }
            return engineList;
        }
        // 更新本地 rule
        function modifySearchItemsRuleFun(name,value){
            var oldRule = getSettingData.rules;
            for(let item in oldRule){
                if(oldRule[item].name == name){
                    console.log("匹配成功, 更新 rule : ", name);
                    oldRule[item] = value;
                    GM_setValue("searchEngineJumpData",getSettingData);
                }
            }
        }

        // parseUri 1.2.2
        // (c) Steven Levithan <stevenlevithan.com>
        // MIT License
        var parseUri = function(str) {
            var o = parseUri.options,
                m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                uri = {},
                i = 14;

            while (i--) uri[o.key[i]] = m[i] || "";

            uri[o.ds.name] = {};
            uri[o.ds.name][0] = {};
            uri[o.ds.name][0]["key"] = (uri.protocol ? uri.protocol : "http") + "://" + uri.host + (uri.port ? ":" + uri.port : "") + "/";
            uri[o.ds.name][0]["val"] = "/";
            i = 0;
            var tempsub = "/",
                subs = uri[o.key[10]].substr(1).split("/");
            for (var j = 1; j < (subs.length + 1); j++, i++) {
                tempsub += tempsub === "/" ? subs[i] : "/" + subs[i];
                if (subs[i]) {
                    uri[o.ds.name][j] = {};
                    uri[o.ds.name][j]["key"] = subs[i];
                    uri[o.ds.name][j]["val"] = tempsub;
                }
            }

            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1) uri[o.q.name][$1] = $2;
            });
            uri[o.aq.name] = {};
            uri[o.key[13]].replace(o.aq.parser, function($0, $1, $2) {
                if ($1) uri[o.aq.name][$1] = $2;
            });

            return uri;
        };
        parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            aq: {
                name: "anchorqueryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            ds: {
                name: "directorySub"
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };

        function getElementLeft(element){
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;
            while (current !== null){
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            return actualLeft;
        };
        // console.log("engineList: ",engineList);
        //xpath 获取单个元素
        function getElementByXPath(xPath, contextNode, doc) {
            doc = doc || document;
            contextNode = contextNode || doc;
            return doc.evaluate(xPath, contextNode, null, 9, null).singleNodeValue;
        };

        // 从函数中获取多行注释的字符串
        function getMStr(fn) {
            var fnSource = fn.toString();
            var ret = {};
            fnSource = fnSource.replace(/^[^{]+/, '');
            // console.log(fnSource);
            var matched;
            var reg = /var\s+([$\w]+)[\s\S]*?\/\*([\s\S]+?)\*\//g;
            while (matched = reg.exec(fnSource)) {
                // console.log(matched);
                ret[matched[1]] = matched[2];
            };

            return ret;
        };

        // 事件支持检测.
        // 比如 eventSupported('fullscreenchange', document);
        function eventSupported(eventName, elem) {
            elem = elem || document.createElement('div');
            var prefix = ['o', 'ms', 'moz', 'webkit', ''];

            var l = prefix.length;
            var pEventName;
            var isFunction;
            var setAttr;

            while(l --) {
                pEventName = 'on' + prefix[l] + eventName;

                if (pEventName in elem) {
                    return pEventName.slice(2);
                } else if (typeof elem.setAttribute == 'function') { // setAttribute 是元素节点的方法
                    setAttr = false;
                    if (!elem.hasAttribute(pEventName)) {
                        setAttr = true;
                        elem.setAttribute(pEventName, 'return;');
                    };

                    isFunction = typeof elem[pEventName] == 'function';

                    if (setAttr) elem.removeAttribute(pEventName);

                    if (isFunction) {
                        return pEventName.slice(2);
                    };
                };
            };

            return false;
        };

        // 保存指定对象相关数据
        var data = (function () {
            'use strict';

            var cache = {
                objs: [],
                data: {},
            };

            function data(obj, key, value) {
                var id = cache.objs.indexOf(obj);
                if (id == -1) {
                    id = cache.objs.push(obj) - 1;
                };
                if (!cache.data[id]) {//初始化
                    cache.data[id] = {};
                };
                if (typeof value == 'undefined') {// 取值
                    return typeof key == 'undefined' ? cache.data[id] : cache.data[id][key];
                } else {
                    return cache.data[id][key] = value;
                };
            };

            return data;
        })();

        // 为mouseleave mouseenter事件做个兼容
        // 需要 eventSupported, data函数支持
        var mouseEventListener = (function () {

            var support = {
                mouseleave : eventSupported('mouseleave'),
                mouseenter : eventSupported('mouseenter'),
            };

            var map = {
                mouseleave : 'mouseout',
                mouseenter : 'mouseover',
            };

            return {
                add : function (type, ele, callback) { //事件类型,元素,监听函数
                    if (support[type]) {
                        ele.addEventListener(type, callback, false); //mouseleave,enter不冒泡,所以在冒泡阶段监听事件,不要担心子孙元素进出发生的事件冒泡上来。
                    } else {
                        var listener = data(callback, 'mouseELListener');
                        if (!listener) {
                            listener = function (e) {
                                var relatedTarget = e.relatedTarget; //mouseout,去往的元素;mouseover,来自的元素
                                // 当mouseout（离开ele）去往的元素不是自己的子孙元素
                                // 当mouseover（进入ele）来自的元素不是自己的子孙元素
                                if (!ele.contains(relatedTarget)) { // contains函数,自己.contains(自己) 返回true
                                    callback.call(ele, e);
                                };
                            };
                            data(callback, 'mouseELListener', listener);
                        };

                        ele.addEventListener(map[type], listener, true);
                    };
                },
                remove : function (type, ele, callback) {
                    if (support[type]) {
                        ele.removeEventListener(type, callback, false);
                    } else {
                        ele.removeEventListener(map[type], data(callback, 'mouseELListener'), true);
                    };
                },
            };
        })();

        //获取已滚动的距离
        function getScrolled(container) {
            if (container) {
                return {
                    x:container.scrollLeft,
                    y:container.scrollTop,
                };
            };
            return {
                x: 'scrollX' in window ? window.scrollX : ('pageXOffset' in window ? window.pageXOffset : document.documentElement.scrollLeft || document.body.scrollLeft),
                y: 'scrollY' in window ? window.scrollY : ('pageYOffset' in window ? window.pageYOffset :  document.documentElement.scrollTop || document.body.scrollTop),
            };
        };

        function getElement(selector) {
            if (selector.indexOf('css;') == 0) {
                return document.querySelector(selector.slice(4));
            } else {
                return getElementByXPath(selector);
            };
        };

        function mousedownhandler(e) {
            var target = e.target;

            target = getElementByXPath('ancestor-or-self::a[contains(@class, "sej-engine")]', target);

            // if (!target || target.className.indexOf('sej-engine') == -1) return;
            if (!target || !this.contains(target)) return;

            var value;
            if (typeof iInput == 'function') {
                value = iInput();
            } else {
                if (iInput.nodeName == 'INPUT') {
                    value = iInput.value;
                } else {
                    value = iInput.textContent;
                };
            };

            // 编码 解码
               // 对搜索词编码 (未做解码处理，浏览器自动处理) 网站1688采用gbk编码
            var ogbk = target.getAttribute('gbk');
            if (ogbk){
                value = toGBK(value)
            } else {
                value = encodeURIComponent(value);
            }
            // // @name     searchEngineJump-NextStage
            if (document.characterSet != "UTF-8") value = encodeURIComponent(value);

            var targetURL = target.getAttribute('url');

            // 一键搜索
            if(getSettingData.allOpen && target.classList.contains("sej-drop-list-trigger")){
                var list = engineList[target.dataset.iqxincategory]
                console.log("allOpen")
                console.log(list)
                for(var i=0;i<list.length;i++){
                    if (matchedRule.url.test(list[i].url)) continue ;
                    if (list[i].disable) continue ;
                    var href = list[i].url.replace('%s', value);
                    GM_openInTab(href)
                }
                target.setAttribute("onclick","return false;");
                return
            }


            // 如果有post请求
            var postSign = targetURL.indexOf('$post$');
            if(~postSign){
                var f=getPostFormHTML(targetURL.substring(0,postSign),[targetURL.substring(postSign+6),value],target.getAttribute('target'))
                target.appendChild(f)
                target.setAttribute("onclick","this.getElementsByTagName('form')[0].submit();return false;");

                // var postURL = parseUri(target.getAttribute('url'));
                // console.log(postURL);
                // target.setAttribute("onclick","return false;");
                // GM_xmlhttpRequest({
                //     method: "post",
                //     url: target.url,
                //     data: targetURL.substring(postSign + 6) + '=' + value ,
                //     get data() {
                //         return this._data;
                //     },
                //     set data(value) {
                //         this._data = value;
                //     },
                //     headers:  {
                //         "Content-Type": "application/x-www-form-urlencoded",
                //         "Origin":postURL.host,
                //         "Referer":postURL.host
                //     },
                //     onload: function(res){
                //         if(res.status === 200){
                //             console.log('成功')
                //         }else{
                //             console.log('失败')
                //             console.log(res)
                //         }
                //     },
                //     onerror : function(err){
                //         console.log('error')
                //         console.log(err)
                //     }
                // });

            } else{
                //console.log(value);
                target.href = target.getAttribute('url').replace('%s', value);
            }
        };
         //获取  POST 的表单的 HTML
        function getPostFormHTML(url, value, newTab) {
            //console.log(url,value,newTab)
            var ospan = document.createElement('span');
            ospan.style.cssText = 'width:0px;height:0px;';
            var form = "" +
                "<form method='post'" +
                " action='" + url + "'" +
                (newTab ? " target='_blank'" : "") +
                ">" +
                "<input type='hidden'" +
                    " name='" + value[0] + "'" +
                    " value='" + value[1] + "'" +
                    " />" +
                "</form>";
            ospan.innerHTML = form;
            return ospan;
        };

        // iframe 禁止加载
        if (window.self != window.top) return;

        var url = location.href;
        var matchedRule;
        var marchedSign;

        //先判断用户规则
        marchedSign = getSettingData.rules.some(function (rule) {
            if(typeof(rule.url)=="string"){     // 2020-12-19 todo:  重新导入用户配置文件后, 会解析错误的问题。 是由于用户保存的rule.url由字符串变成了空对象{},具体在什么情况下会导致变成空对象,并未排查
                rule.url = new RegExp(rule.url.substring(1,rule.url.length-1));
                if (rule.url.test(url)) {
                    matchedRule = rule;
                    return true;
                };
            }
        });

        // console.log(marchedSign,matchedRule);
        if(!marchedSign){
            rules.some(function (rule) {
                if (rule.url.test(url)) {
                    matchedRule = rule;
                    return true;
                };
            });
        }

        if (!matchedRule || !matchedRule.enabled) return;

        // var iTarget = getElement(matchedRule.insertIntoDoc.target);
        var iTarget = typeof matchedRule.insertIntoDoc.target == "function" ? matchedRule.insertIntoDoc.target() : getElement(matchedRule.insertIntoDoc.target);
        var iInput = typeof matchedRule.insertIntoDoc.keyword == 'function' ? matchedRule.insertIntoDoc.keyword : getElement(matchedRule.insertIntoDoc.keyword);

        ///test -------------- 测试 start
        // console.log("searchEngineJump test iTarget, iInput: ",iTarget, iInput);
        ///test -------------- 测试 end

        if (!iTarget || !iInput) {
            console.log("脚本 searchEngineJump 搜索引擎快捷跳转 遇到了错误： ");
            console.log("目标有误：\n iTarget：" + iTarget + "\niInput(keyword): " + iInput);
            return;
        }

        // 添加全局样式
        var globalStyle = document.createElement('style');
        globalStyle.type = 'text/css';
        globalStyle.textContent = getMStr(function(){
            var cssText;
            /*
                #sej-container {
                    display: block;
                    position: relative;
                    z-index: 2;
                    padding: 1px 5px 1px 5px;
                    line-height: 1.5;
                    font-size: 13px;
                    font-family: arial,sans-serif;
                    transform-origin: top center;
                    animation: sejopen 0.3s;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                    color: #333;
                    //transition:0.3s;
                }

                #sej-expanded-category {
                    font-weight: bold;
                }

                .sej-engine {
                    line-height: 2;
                    display: inline-block;
                    margin: 0 0px 0 0;
                    border: none;
                    padding: 0 6px;
                    text-decoration: none;
                    font-weight:500;
                    transition: background-color 0.15s ease-in-out;
                }
                .sej-drop-list-trigger {

                }
                .sej-drop-list-trigger-shown {
                    background-color: #DEEDFF !important;
                }
                .sej-drop-list-trigger::after {
                    content: '';
                    display: inline-block;
                    margin: 0 0 0 3px;
                    padding: 0;
                    width: 0;
                    height: 0;
                    border-top: 6px solid #BCBCBC;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                    border-bottom: 0px solid transparent;
                    vertical-align: middle;
                    transition: -webkit-transform 0.3s ease-in-out;
                    transition: transform 0.3s ease-in-out;
                }
                .sej-drop-list-trigger-shown::after {
                    -webkit-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
                .sej-drop-list a:visited,
                .sej-drop-list a:hover,
                .sej-engine a:visited,
                .sej-engine a:hover,
                #sej-container a:visited,
                #sej-container a:hover{
                    color:#333;
                }
                .sej-engine:hover {
                    background-color: #EAEAEA;
                }
                .sej-drop-list > .sej-engine:hover {
                    background-color: #DEEDFF;
                }
                .sej-drop-list > .sej-engine {
                    display: block;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    top: 0px;
                }

                .sej-engine-icon {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: none;
                    padding: 0;
                    margin: 0 3px 0 0;
                    vertical-align: text-bottom;
                    box-sizing:unset;
                }

                .sej-drop-list {
                    position: absolute;
                    display: none;
                    opacity: 0.3;
                    top: -10000px;
                    left: 0;
                    min-width: 90px;
                    padding: 5px 0;
                    text-align: left;
                    font-size: 13px;
                    -moz-box-shadow: 1px 1px 5px #999;
                    -webkit-box-shadow: 2px 2px 5px #999;
                    box-shadow: 2px 2px 5px #999;
                    background-color: rgba(255,255,255,.7);
                    backdrop-filter: blur(7px);
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                    transition: opacity 0.2s ease-in-out,
                        top 0.2s ease-in-out;
                }
                @keyframes sejopen {
                    0% {
                        transform: scale(1, 0.1);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1, 1);
                        opacity: 1;
                    }
                }
                @keyframes iqxinsejopen {
                    0% {
                        transform: scale(0.01, 0.01);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1, 1);
                        opacity: 1;
                    }
                }
            */
        }).cssText;
        document.head.appendChild(globalStyle);

        // 工具列表动画
        if(!getSettingData.transtion){
            GM_addStyle(".sej-engine," +
                        ".sej-drop-list-trigger," +
                        ".sej-drop-list{" +
                            "transition:none!important;" +
                        "}" +
                        "#sej-container{" +
                            "animation:none!important;" +
                        "}" +
                        ".sej-drop-list {" +
                            "backdrop-filter:none!important;" +
                            "background-color: rgba(255,255,255,.9)!important;" +
                            "}" +
                        ""
            )
        }

        // 列表对象
        function DropDownList(a, list) {
            this.a = a;
            this.list = list;
            this.init();
        };
        DropDownList.zIndex = 100000000;

        DropDownList.prototype = {
            hidden: true,
            showDelay: 233,
            hideDelay: 233,
            aShownClass: 'sej-drop-list-trigger-shown',

            init: function () {
                var a = this.a;
                var list = this.list;

                var self = this;

                // 关闭动画
                if(!getSettingData.transtion){
                    this.showDelay = 0;
                    this.hideDelay = 0;
                }

                // 进入显示
                mouseEventListener.add('mouseenter', a, function () {
                    clearTimeout(self.hideTimerId);

                    if (self.hidden) {
                        self.showTimerId = setTimeout(function () {
                            self.show();
                        }, self.showDelay);
                    } else {
                        var style = list.style;
                        style.top = parseInt(list.style.top) -6 +"px";
                        style.zIndex = DropDownList.zIndex ++;
                        style.opacity = 0.96;
                    };
                });

                // 离开隐藏
                mouseEventListener.add('mouseleave', a, function () {
                    clearTimeout(self.showTimerId);

                    if (!self.hidden) {
                        list.style.top = parseInt(list.style.top)+6 +"px";
                        list.style.opacity = 0.04;
                        self.hideTimerId = setTimeout(function () {
                            self.hide();
                        }, self.hideDelay);
                    };
                });

                mouseEventListener.add('mouseenter', list, function () {
                    clearTimeout(self.hideTimerId);

                    var style = list.style;
                    style.zIndex = DropDownList.zIndex ++;
                    style.opacity = 0.96;
                    style.top = parseInt(list.style.top) -6 +"px";
                });

                mouseEventListener.add('mouseleave', list, function () {

                    list.style.opacity = 0.04;
                    list.style.top = parseInt(list.style.top)+6 +"px";
                    self.hideTimerId = setTimeout(function () {
                        self.hide();
                    }, self.hideDelay);
                });
            },
            show: function () {
                if (!this.hidden) return;
                this.hidden = false;

                var scrolled = getScrolled();
                var aBCRect = this.a.getBoundingClientRect();

                var style = this.list.style;

                var top = scrolled.y + aBCRect.bottom;
                var left = scrolled.x + aBCRect.left;

                // 百度界面二级搜索会出现偏移的问题
                if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
                    top = 26;
                    if(document.querySelector("#myuser") && getSettingData.center != 0){
                        left += 0;
                    } else {
                        // left += getSettingData.baiduOffset;   不需要用户自己修改，直接写死
                        left += -134;
                    }
                }

                style.top = top + 6 + 'px';
                style.left = left + 'px';
                style.zIndex = DropDownList.zIndex --;
                style.display = 'block';

                setTimeout(function () {
                    style.opacity = 0.96;
                    style.top = top + 'px';
                }, 30);

                this.a.classList.add(this.aShownClass);

            },
            hide: function () {
                if (this.hidden) return;
                this.hidden = true;

                var style = this.list.style;
                style.display = 'none';
                style.opacity = 0.1;

                this.a.classList.remove(this.aShownClass);

            }
        };

        var pageEncoding = (document.characterSet || document.charset).toLowerCase();

        // 创建dom
        var container = document.createElement('sejspan');
        container.id = 'sej-container';
        container.className = "rwl-exempt";

        container.addEventListener('mousedown', mousedownhandler, true);

        var aPattern = '<a href="" class="sej-engine" target="$blank$" data-iqxincategory="$category$" encoding="$encoding$" gbk="$gbk$" url="$url$"><img src="$favicon$" class="sej-engine-icon" />$name$</a>';
        var dropLists = [];
        engineList.details.forEach(function (item) {
            // console.log(item);  // 搜索菜单   ["网页", "web", true]
            var category = item[1];   // "web"
            var cName = item[0];    // "网页"
            var engines = [];

            engineList[category].forEach(function (engine) {
                // 检测是否用搜索搜某一网站 site:xxx.xx
                var engineUrl = engine.url;
                var siteIndex = engineUrl.lastIndexOf("site");
                var siteMark = null;
                if(~siteIndex){
                    var siteURL = engineUrl.slice(siteIndex);
                    siteMark = /([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/.test(siteURL);
                    // console.log(/([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/.test(siteURL),siteURL);
                }

                //if (!siteMark && matchedRule.url.test(engineUrl)) return;// 去掉跳转到当前引擎的引擎
                if(engine.disable) return;
                var a = aPattern.replace('$encoding$', (engine.encoding || 'utf-8').toLowerCase())
                    .replace('$url$', engineUrl)
                    .replace('$name$', engine.name)
                    .replace("$category$",category);

                // 图标
                if (engine.favicon) {
                    a = a.replace('$favicon$', engine.favicon);
                } else {
                    a = a.replace('src="$favicon$"', '');
                };
                // gbk编码
                if (engine.gbk) {
                    a = a.replace('$gbk$', engine.gbk);
                } else {
                    a = a.replace('gbk="$gbk$"', '');
                };
                // 新标签页
                if (getSettingData.newtab || engine.blank) {
                    a = a.replace('$blank$', "_blank");
                } else {
                    a = a.replace('target="$blank$"', '');
                };

                engines.push(a);
            });
            // 非空列表
            if (!engines.length) return;

            engines = engines.join('');

            // 展开当前搜索分类列表
            if (!getSettingData.foldlist && category == matchedRule.engineList) {
                container.innerHTML = engines;
            } else {
                var dropList = document.createElement('sejspan');
                dropList.className = 'sej-drop-list rwl-exempt';
                dropList.innerHTML = engines;

                //  a:主搜索菜单
                // dropList: 搜索子菜单
                var a = dropList.firstElementChild.cloneNode(true);
                a.className = a.className + ' sej-drop-list-trigger';
                a.lastChild.nodeValue = cName;
                dropLists.push([a, dropList]);
            };
        });

        //将各个搜索列表插入文档中
        dropLists.forEach(function (item) {

            // console.log(item[0]);
            // console.log(item[0].dataset.iqxincategory)    //"web"
            // console.log(item[0].querySelector("img").src);   // 图片链接
            // console.log(item[0].innerText);  // 网页
            // console.log(item[1]);

            if(getSettingData.icon){
                console.log(icon[item[0].dataset.iqxincategory])
                if(icon[item[0].dataset.iqxincategory]){
                    item[0].querySelector("img").src = icon[item[0].dataset.iqxincategory]

                }
            }


            container.appendChild(item[0]);    //将搜索列表放入主搜索
            document.body.appendChild(item[1]);  // 插入搜索子菜单
            item[1].addEventListener('mousedown', mousedownhandler, true);

            new DropDownList(item[0], item[1]);
        });

        // 将主搜索插入网页中
        switch (matchedRule.insertIntoDoc.where.toLowerCase()) {
            case 'beforebegin' :
                iTarget.parentNode.insertBefore(container, iTarget);
            break;
            case 'afterbegin' :
                if (iTarget.firstChild) {
                    iTarget.insertBefore(container, iTarget.firstChild);
                } else {
                    iTarget.appendChild(container);
                };
            break;
            case 'beforeend' :
                iTarget.appendChild(container);
            break;
            case 'afterend' :
                if (iTarget.nextSibling) {
                    iTarget.parentNode.insertBefore(container, iTarget.nextSibling);
                } else {
                    iTarget.parentNode.appendChild(container);
                };
            break;
        };

        // todo: 此处与上面重复,在百度页面会插入两次
        if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
            var sej = document.getElementsByTagName("sejspan")[0];
            sej.appendChild(globalStyle);

            dropLists.forEach(function (item) {
                container.appendChild(item[0]);
                // document.body.appendChild(item[1]);
                var sej = document.getElementsByTagName("sejspan")[0];
                sej.appendChild(item[1]);
                item[1].addEventListener('mousedown', mousedownhandler, true);

                new DropDownList(item[0], item[1]);
            });
        };

        // 兼容其他修改网页的脚本
        if (matchedRule.style) {
            // 判断是否存在脚本 “AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”
            if(getSettingData.center==2){    // 自动判断是否添加
                if(document.querySelector("#myuser") && matchedRule.style_ACBaidu){
                    console.log("检测到脚本：“AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”   ------自动添加");
                    matchedRule.style = matchedRule.style_ACBaidu;
                }
            } else if (getSettingData.center==1){   //  强制添加
                console.log("检测到脚本：“AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”   ------强制添加");
                matchedRule.style = matchedRule.style_ACBaidu?matchedRule.style_ACBaidu:matchedRule.style;
            }     //
            // 判断是否存在脚本“知乎排版优化”
            if(document.getElementById('SearchMain')){
                if(document.getElementById('SearchMain').style.marginLeft=='150px'){
                    matchedRule.style = matchedRule.style_ZhihuChenglinz;
                    matchedRule.fixedTop = null;
                    console.log("检测到‘知乎排版优化’脚本")
                }
            }
            container.style.cssText = matchedRule.style;
        };

        // 由于与要插入网页的样式无法很好的兼容,更改源网页的样式
        if(matchedRule.stylish){GM_addStyle(matchedRule.stylish);};

        //固定搜索栏
        if(getSettingData.fixedTop){
            // 判断是否需要只在向上滚动时显示
            if(getSettingData.fixedTopUpward){
                window.onmousewheel = document.onmousewheel = function(eee){
                    if(eee.wheelDelta>0){
                        fixedTopFun(matchedRule.fixedTop, matchedRule.fixedTopColor);
                    }else{
                        var obj = document.getElementById("sej-container");
                        obj.style.cssText = matchedRule.style;
                    }
                }
            } else {
                window.onscroll = function(){
                    fixedTopFun(matchedRule.fixedTop, matchedRule.fixedTopColor);
                };
            }
            // 固定搜索栏
            function fixedTopFun(height, color){
                var obj = document.getElementById("sej-container");
                var objTop = obj.offsetTop ;
                var objLeft = obj.offsetLeft ;

                var current = obj.offsetParent;
                while (current !== null){
                    objLeft += current.offsetLeft;
                    current = current.offsetParent;
                }

                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if(height){
                    objTop = height;
                }else{
                    height = 0;
                }

                if(scrollTop <= objTop){
                    obj.style.cssText = matchedRule.style;
                }else if(obj.style.position!="fixed"){
                    // console.log(scrollTop,objTop,scrollTop - objTop);
                    var objstyle = window.getComputedStyle(obj , null);
                    var marginTop = parseInt(objstyle.marginTop);
                    var marginLeft = parseInt(objstyle.marginLeft);
                    var marginRight = parseInt(objstyle.marginRight);
                    //console.log(objLeft,marginLeft);

                    obj.style.top = height - marginTop + 'px';

                    // 如果之前未设置颜色,则默认设置为白色
                        // 2020-12-19 增加选项,可以通过代码自定义颜色,但是无法通过网站自动获取
                    if(color){
                        obj.style.background = color;
                    } else if(objstyle.backgroundColor === "rgba(0, 0, 0, 0)" || objstyle.backgroundColor === "transparent"){
                        obj.style.background = '#fff';
                    }
                    obj.style.left = getElementLeft(obj) - marginLeft + "px";
                    // obj.style.left = getElementLeft(obj) + "px";
                    debug("objLeft: ",objLeft,"marginLeft: ",marginLeft,"marginRight: ",marginRight,"getElementLeft: ",getElementLeft(obj));
                    // 知乎等网站的情况 利用 margin 居中
                    if(marginRight === marginLeft && marginRight != 0){
                        obj.style.left = marginLeft + "px";
                    }
                    // 淘宝等网站的情况 利用 text-align 居中
                    if(obj.style.textAlign === "center"){
                        obj.style.width = objstyle.width;
                    }

                    obj.style.position = 'fixed';
                }
            }
        } else {
            window.onscroll = function(){
                return true;
            };
        };

        // -------------------设置相关--------------------------------
        // 设置按钮相关
        var dragEl = null;
        var dragData = null;

        function SEJsetting(){
            this.ele = document.createElement("div");
            this.mask = document.createElement("div");

            this.parentTemp = null;
            this.editTemp = null;
            this.online = null;
            this.init();
        };

        SEJsetting.prototype = {
            testabc : "hahah",
            aPatternParent : "<div></div>",

            init: function () {
                // console.log("init...");
                var that = this;

                this.ele.id = "settingLayer";
                this.mask.id = "settingLayerMask";

                this.addGlobalStyle();

                this.addContent();

                this.mask.addEventListener("click",function(){
                    that.hide();
                });
                this.ele.addEventListener("click",function(e){
                    e.stopPropagation();
                });

                this.mask.appendChild(this.ele);
                document.body.appendChild(this.mask);

                // 绑定事件
                this.ele.addEventListener("click",that.domClick.bind(this),false);
                this.dragEvent();
                this.setDragNode(this.ele); //设置拖动
                // input[range]
                that.rangeChange(true);
                document.querySelector("#setBtnOpacityRange").addEventListener("input",that.rangeChange);
            },
            dragEvent: function(){
                var that = this;
                var odivsdrag = document.querySelectorAll(".drag");
                [].forEach.call(odivsdrag,function(odiv){
                    odiv.addEventListener("dragstart",that.domdragstart,false);
                    odiv.addEventListener('dragenter', that.domdragenter, false);
                    odiv.addEventListener('dragover', that.domdragover, false);
                    odiv.addEventListener('dragleave', that.domdragleave, false);
                    odiv.addEventListener('drop', that.domdrop, false);
                    odiv.addEventListener('dragend',that.domdropend, false);
                });
            },
            addContent: function(){
                var aPattern = '<span draggable="true" class="drag">' +
                                '<span class="sej-engine"' +
                                ' data-xin="$xin$" ' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                ' data-iqxindisabled="$disabled$" ' +
                                ' data-iqxingbk="$gbk$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" style="padding-bottom:3px;"/><span>$name$</span></span>' +
                                ' <span class="iqxin-set-edit" title="编辑 Edit"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg=="/></span>' +
                                ' <span class="iqxin-set-del" title="删除 Delete"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg=="></span>' +
                                '</span>';
                var details = engineList.details;
                // 若根据数组长度获取,负数引导的为属性,不再length长度之内,所以来个大体的数字,当都为空时,结束循环
                // var detailsLength = details.length;
                var detailsLength = 99;
                for (let i=0;i<detailsLength;i++){
                    var j = i;
                    j = details[j] ? j : -j;
                    if (!details[j]){break};

                    var odiv = document.createElement("div");
                    odiv.id = details[j][1]; // "web"
                    odiv.classList.add("iqxin-items");

                    var oDivTitle = document.createElement("div");
                    oDivTitle.classList.add("sejtitle","drag");
                    oDivTitle.setAttribute("draggable","true");
                    oDivTitle.dataset.iqxintitle = details[j][1];
                    oDivTitle.dataset.xin = j;
                    oDivTitle.innerHTML ='<span class="iqxin-pointer-events">' + details[j][0] + '</span>' +
                                        '<span class="iqxin-title-edit" title="编辑 Edit"><img class="sej-engine-icon" src="' + icon.edit + '"/></span>'+
                                        ' <span class="iqxin-set-title-del" title="删除 Delete"><img class="sej-engine-icon" src="' + icon.del + '"></span>';
                    odiv.appendChild(oDivTitle);

                    var oDivCon = document.createElement("div");
                    oDivCon.classList.add("sejcon");
                    var oDivConStr = "";
                    var engineListItme = engineList[details[j][1]];
                    var itemLength = engineListItme.length;
                    for(let ii=0;ii<itemLength;ii++){
                        var jj = ii;
                        if (!engineListItme[jj]){break};
                        var a = aPattern.replace('$name$', engineListItme[jj].name)
                                .replace('$favicon$', engineListItme[jj].favicon)
                                .replace("$xin$",jj);
                        // 添加属性
                        a = a.replace("$img$", engineListItme[jj].favicon)
                            .replace("$title$", engineListItme[jj].name)
                            .replace("$link$", engineListItme[jj].url);
                        if (engineListItme[jj].blank) {
                            a = a.replace('$blank$', "_blank");
                        } else {
                            a = a.replace('data-iqxintarget="$blank$"', '');
                        };
                        if (engineListItme[jj].disable) {
                            a = a.replace('$disabled$', "true");
                        } else {
                            a = a.replace('data-iqxindisabled="$disabled$"', '');
                        };
                        if (engineListItme[jj].gbk) {
                            a = a.replace('$gbk$', "true");
                        } else {
                            a = a.replace('data-iqxingbk="$gbk$"', '');
                        };

                        oDivConStr += a;
                    };

                    oDivConStr += "<span class='iqxin-additem'>+</span>";

                    oDivCon.innerHTML = oDivConStr;
                    odiv.appendChild(oDivCon);

                    this.ele.appendChild(odiv);
                };

                // 更多设置 菜单
                var btnEle2 = document.createElement("div");
                btnEle2.id = "btnEle2"
                var fixedTop_checked = getSettingData.fixedTop?"checked":"";
                var fixedTopUpward_checked = getSettingData.fixedTopUpward?"checked":"";
                // var debug_checked = getSettingData.debug?"checked":"";
                var transition_checked = getSettingData.transtion?"checked":"";
                var foldlist_checked = getSettingData.foldlist?"checked":"";
                var allOpen_checked = getSettingData.allOpen?"checked":"";

                // var setBtnOpacity_value = getSettingData.setBtnOpacity;
                var btnStr2 = "<div>" +
                            // "<span id='xin-reset' title='慎点,出厂重置'>清空设置</span>" +
                            "<span id='xin-modification' title='edit 分享自己的配置或清空配置'>配置文件</span>" +
                            "<span id='xin-importing' title='importing 导入更为专业的搜索引擎'>导入</span>" +
                            // "<span id='iqxin-debugS' title='对设置菜单有一定的影响'>" +
                            //     "<label>debug<input id='iqxin-debug' type='checkbox' name='' " +
                            //         debug_checked +
                            //     " style='vertical-align:middle;'></label>" +
                            // "</span>" +
                            "<span id='xin-transtion' title='动画,该设置需要刷新页面生效'>" +
                                "<label>动画<input id='iqxin-transtion' type='checkbox' name='' " +
                                transition_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-foldlists' title='将当前所在搜索分类折叠'>" +
                                "<label>折叠当前搜索分类<input id='iqxin-foldlist' type='checkbox' name='' " +
                                    foldlist_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='iqxin-fixedTopS' title='fixedTop 当滚动页面时,固定到页面顶端。某些页面的样式存在问题'>" +
                                "<label>固定到顶端<input id='iqxin-fixedTop' type='checkbox' name='' " +
                                    fixedTop_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='iqxin-fixedTopUpward' title='固定到顶端后,仅向上滚动才显示,需要刷新网页生效'>" +
                                "<label>仅上拉显示<input id='iqxin-fixedTopUpward-item' type='checkbox' name='' " +
                                    fixedTopUpward_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-setBtnOpacity' title='设置按钮透明度'>设置按钮透明度 <input type='range' step='0.01'  min='0' max='1' value='"+ (getSettingData.setBtnOpacity<0?-getSettingData.setBtnOpacity:getSettingData.setBtnOpacity) +"' id='setBtnOpacityRange'><i style='display:inline-block;width:3em;text-align:center;' class='iqxin-setBtnOpacityRangeValue' title='按钮 显示/隐藏(非透明)),请确定知道自己如何再次打开; 火狐非高级玩家建议别禁用'></i></span>" +

                            "</div>" ;
                            // "<div><span>test</span></div>";
                btnEle2.innerHTML = btnStr2;
                this.ele.appendChild(btnEle2);


                // 添加按钮
                var btnEle = document.createElement("div");
                btnEle.id = "btnEle"

                var btnStr = "<div class='btnEleLayer'>" +
                            "<span class='feedback' title='在 Drugx.cn 进行反馈'><a target='_blank' href='https://drugx.cn/'>Drugx.cn</a></span>" +
                            "<span class='feedback' title='在 Github 进行反馈'><a target='_blank' href='https://github.com/caiyajunx/drugsearchJump'>GitHub</a></span>" +
                            "<span id='xin-allOpen' title='后台打开该搜索分类的所有网站'>" +
                                "<label>一键搜索<input id='iqxin-allOpen-item' type='checkbox' name='' " +
                                    allOpen_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-centerDisplay' title='center 居中显示。主要是兼容AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列'>居中：" +
                                "<select id='iqxin-center'>" +
                                    "<option value='original'" + (getSettingData.center == 0?"selected":"")  + ">默认 ▽</option>" +
                                    "<option value='force'" + (getSettingData.center == 1?"selected":"")  + ">强制 ▽</option>" +
                                    "<option value='auto'" + (getSettingData.center == 2?"selected":"")  + ">自动 ▽</option>" +
                                "</select>" +
                            "</span> " +
                            "<span id='xin-newtab' title='open newtab 是否采用新标签页打开的方式'>打开方式：" +
                                "<select id='iqxin-globalNewtab'>" +
                                    "<option value='globalDef'>默认页面 ▽</option>" +
                                    "<option value='globalNewtab'" + (getSettingData.newtab?"selected":"")  + ">新标签页 ▽</option>" +
                                "</select>" +
                            "</span> " +
                            "<span id='xin-addDel' title='add & del 增加新的或者删除现有的搜索'>增加 / 删除</span> " +
                            "<span id='moreSet' title='more set'>更多设置</span>" +
                            "<span id='xin-save' title='save & close'>保存并关闭</span>" +
                            "</div>";
                btnEle.innerHTML = btnStr;
                this.ele.appendChild(btnEle);

                // 可以拖动的顶栏
                var dragDom = document.createElement("div");
                dragDom.id = "dragDom";
                dragDom.style.cssText = "height:16px;width:97%;position:absolute;top:0;cursor:move;";
                this.ele.appendChild(dragDom);

                // 增加搜索列表
                var nSearchList = document.createElement("div");
                nSearchList.id = "nSearchList";
                nSearchList.style.cssText = "visibility:hidden;opacity:0;transition:0.3s;position:absolute;bottom:10%;right:5%;padding:5px 10px;border-radius:4px;border:1px solid #EC6D51;color:#ec6d51;cursor:pointer;background:#fff;";
                nSearchList.innerHTML = "增加新的搜索列表";
                this.ele.appendChild(nSearchList);

                // 关闭按钮
                if(getSettingData.closeBtn){
                    var closebtnELe = document.createElement("span");
                    closebtnELe.id = "xin-close";
                    closebtnELe.setAttribute("title","close 关闭");
                    this.ele.appendChild(closebtnELe);
                }
            },
            show: function(){
                var style = this.mask.style;
                var eleStyle = this.ele.style;
                style.display = "flex";
                eleStyle.transform = "translateY(-20%)";
                document.body.style.overflow = "hidden";

                this.windowResize();

                // if(document.querySelector("xin-newtab")){
                //     document.querySelector("#xin-newtab").querySelectorAll("option")[getSettingData.newtab].setAttribute("selected","selected");
                // }

                setTimeout(function () {
                    style.opacity = 1;
                    eleStyle.transform = "none";
                }, 30);
            },
            hide: function(){
                this.allBoxClose(); // 关闭所有次级窗口、菜单

                var style = this.mask.style;
                this.ele.style.transform = "translateY(20%)";
                style.opacity = 0;
                setTimeout(function () {
                    style.display = "none";
                    document.body.style.overflow = "auto";
                }, 500);
            },
            reset: function(){
                if(confirm("将会删除用户设置！")){
                    GM_deleteValue("searchEngineJumpData");
                    window.location.reload();
                }
            },
            // 增加 “添加删除框”
            addDel: function(e){
                if (e.target.classList.contains("iqxin-btn-active")){
                    this.addDelremove();
                } else {
                    // console.log("不存在,增加增加");
                    var obtn = document.querySelector("#xin-addDel");
                    obtn.classList.add("iqxin-btn-active");

                    var odom = document.querySelectorAll(".iqxin-set-del");
                    [].forEach.call(odom,function(div){
                        div.classList.add("iqxin-set-active");
                    });

                    // 标题添加删除框
                    var odom = document.querySelectorAll(".iqxin-set-title-del");
                    [].forEach.call(odom,function(div){
                        // console.log(div);
                        div.classList.add("iqxin-set-active");
                    });

                    // 增加单个搜索
                    var oitemAdd = document.querySelectorAll(".iqxin-additem");
                    [].forEach.call(oitemAdd,function(div){
                        // console.log(div);
                        div.classList.add("iqxin-set-active");
                    });

                    // 添加搜索列表
                    var olistAdd = document.querySelector("#nSearchList");
                    olistAdd.classList.add("iqxin-set-active");

                }
            },
            // 关闭 “添加删除框”
            addDelremove: function(bool){
                var obtn = document.querySelector(".iqxin-btn-active");
                if(obtn){
                    obtn.classList.remove("iqxin-btn-active");

                    var odom = document.querySelectorAll(".iqxin-set-active");
                    [].forEach.call(odom,function(div){
                        div.classList.remove("iqxin-set-active");
                    });

                    var oitemAdd = document.querySelectorAll(".iqxin-additem");
                    [].forEach.call(oitemAdd,function(div){
                        div.classList.remove("iqxin-set-active");
                    });
                }
                this.addItemBoxRemove();
            },

            // 界面,框：添加新的搜索
            addItemBox: function(bool){
                this.isOnline();
                this.addItemBoxRemove();

                var newDiv = document.createElement("div");
                newDiv.id= "newSearchBox";
                newDiv.style.cssText = "top:43%;opacity:0.1;";
                newDiv.innerHTML=""+
                    "<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填,留空则自动获取' onfocus='this.select()' /> <br/><br/>" +
                    "<span>打开方式 : " +
                        '<select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px"> ' +
                        '<option value="default">新标签页打开</option> ' +
                        '<option value="newtab">当前页打开</option> ' +
                        '<select> ' +
                    "</span>" +
                    "<br/><br/>" +
                    "<span style=''><a target='_blank' style='color:#999;' href='https://greasyfork.org/zh-CN/scripts/27752-searchenginejump'>相关使用说明</a></span>" +
                    "&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp;" +
                    "<button id='addItemBoxEnter' class='addItemBoxEnter addItemBoxBtn iqxin-enterBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addItemBoxCancel' class='addItemBoxCancel addItemBoxBtn iqxin-closeBtn'>取消</button>" +
                    "";

                this.ele.appendChild(newDiv);
                setTimeout(function(){newDiv.style.cssText="";},10);
                document.querySelector("#iqxin-newTitle").focus();
            },
            // 内部逻辑,：添加新的搜索
            addItemEnger: function(){
                var otitle,olink,oimg,oblank;
                otitle = document.querySelector("#iqxin-newTitle").value;
                olink = document.querySelector("#iqxin-newLink").value;
                oimg = document.querySelector("#iqxin-newIcon").value;
                oblank = document.querySelector("#iqxin-newTarget").selectedIndex;

                if (!oimg){
                    oimg = this.getICON(olink);
                }

                var a = '<span class="sej-engine"' +
                            ' data-iqxinimg="$img$" ' +
                            ' data-iqxintitle="$title$" ' +
                            ' data-iqxinlink="$link$" ' +
                            ' data-iqxintarget="$blank$" ' +
                            '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                            '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                            '</span> ' +
                            '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                '<img class="sej-engine-icon" src="' + icon.del + '">' +
                            '</span>' ;

                a = a.replace("$img$", oimg)
                    .replace("$title$", otitle)
                    .replace("$link$", olink);

                if (oblank){
                    a = a.replace('data-iqxintarget="$blank$"', '');
                } else {
                    a = a.replace('$blank$', "_blank");
                };

                a = a.replace('$name$', otitle)
                    .replace('$favicon$', oimg);

                var ospan = document.createElement("span");
                ospan.className = "drag";
                ospan.innerHTML = a;

                this.parentNode.insertBefore(ospan,this.parentNode.lastChild);

                // 添加完成,移除添加框
                this.addItemBoxRemove();
            },
            addItemBoxRemove: function(ele){
                ele = ele?ele:"#newSearchBox"
                var newBox = document.querySelector(ele);
                if(newBox){
                    // newBox.style.transform = "translateY(30%)";
                    newBox.style.top = "60%";
                    newBox.style.opacity = "0";
                    setTimeout(function(){
                        newBox.parentNode.removeChild(newBox);
                    },550);
                }
            },
            // 获取图标
            getICON: function(olink){
                var ourl;
                var mark;
                var uri = parseUri(olink);
                var ohttp = uri.protocol?uri.protocol:"http";
                var siteURL = ohttp + "://" + uri.host;
                // console.log(siteURL);

                if(isNaN(getSettingData.getIcon)){
                    ourl = getSettingData.getIcon;
                } else {
                    mark = parseInt(getSettingData.getIcon);
                    console.log(mark);
                    switch (mark){
                        case 1: ourl = siteURL + "/favicon.ico";break;
                        case 2: ourl = 'https://www.google.com/s2/favicons?domain='+siteURL;break;
                        case 3: ourl = 'http://statics.dnspod.cn/proxy_favicon/_/favicon?domain='+uri.host;break;
                    }
                }

                if(ourl){
                    ourl = ourl.replace("%s", siteURL)
                    return ourl;
                }
                debug("能否连接至google：",this.online);
                if (this.online){
                    ourl = 'https://www.google.com/s2/favicons?domain=' + uri.host;
                    return ourl;
                } else {
                    ourl =  ohttp + "://" + uri.host + "/favicon.ico";
                    return ourl;
                }
            },

            // 界面, 框: 添加新的搜索列表
            addSearchListBox: function(){
                var odiv = document.querySelector("#newSearchListBox");
                if (odiv){
                    this.boxClose("#newSearchListBox");
                    return;
                }
                var newDiv = document.createElement("div");
                newDiv.id= "newSearchListBox";

                var myDate = new Date();
                // var hash = "user" + myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() +myDate.getMinutes()+myDate.getSeconds();
                var hash = "user" + myDate.getTime();

                newDiv.innerHTML=""+
                    "<span>列表名称: </span><input id='iqxin-newSearchListName' onfocus='this.select()'>" +
                    "<br><br>" +
                    "<span>内部名称: </span><input id='iqxin-newSearchListInnerName' onfocus='this.select()' value='" + hash + "'>" +
                    "<br><br>" +
                    "<button id='addSearchListBoxEnter' class='addSearchListBoxEnter addItemBoxBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addSearchListBoxCancel' class='addSearchListBoxCancel addItemBoxBtn'>取消</button>" +
                    "";
                this.ele.appendChild(newDiv);

                document.querySelector("#iqxin-newSearchListName").focus();
            },
            addSearchListEnger: function(){
                var name = document.querySelector("#iqxin-newSearchListName").value;
                var innerName = document.querySelector("#iqxin-newSearchListInnerName").value;

                if(innerName.length===0){
                    alert("内部名称不能为空");
                    return;
                }
                if(name.length===0){
                    name = innerName;
                }

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                odiv.innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                        '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";

                // this.boxClose("#newSearchListBox");
                this.addItemBoxRemove("#newSearchListBox");

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },

            boxClose: function(ele){
                var odiv = document.querySelector(ele);
                if(odiv){
                    odiv.parentNode.removeChild(odiv);
                }
            },

            // 界面 框：修改框
            addEditBox: function(e){
                console.log(e);
                this.addItemBoxRemove();

                var target = e.target.parentNode.firstChild;

                var otitle = target.dataset.iqxintitle;
                var olink = target.dataset.iqxinlink;
                var oicon = target.dataset.iqxinimg;
                var otarget = target.dataset.iqxintarget;
                var odisabled = target.dataset.iqxindisabled;

                this.editTemp = target;

                var strblank;
                if(otarget){
                    strblank = '<option value="default">新标签页打开</option><option value="newtab">当前页打开</option> ';
                } else{
                    strblank = '<option value="default">新标签页打开</option><option value="newtab" selected="selected">当前页打开</option>';
                }

                var strdisable = "";
                if(odisabled){
                    strdisable = "checked='checked'";
                }

                var newDiv = document.createElement("div");
                newDiv.id= "newSearchBox";
                // 从鼠标点击所在的项目展开菜单(2021-03-16,从上线至今,动画一直有卡顿现象)
                // newDiv.style.cssText = "top:"+(e.screenY-120) +"px;left:"+(e.screenX-140) +"px;";
                newDiv.style.cssText = "top:43%;opacity:0.1;";
                var innerHTML=""+
                    "<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' value='"+ otitle +"' /> <br/><br/>" +
                    "<span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' value='"+ olink +"' /> <br/><br/>" +
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填,留空则自动获取' onfocus='this.select()' value='"+ oicon +"' /> <br/><br/>" +
                    "<span>打开方式 : " +
                        '<select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px"> ' +
                            '$strblank$' +
                        '<select> ' +
                    "</span>" +
                    "<br/><br/>" +
                    "<span style=''><label>禁用：<input type='checkbox' name='' id='iqxin-newDisabled' $checked$ style='vertical-align:middle;'></label></span>" +
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<button id='editItemBoxEnter' class='editItemBoxEnter addItemBoxBtn iqxin-enterBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addItemBoxCancel' class='addItemBoxCancel addItemBoxBtn iqxin-closeBtn'>取消</button>" +
                    "";

                newDiv.innerHTML = innerHTML.replace("$strblank$", strblank)
                                    .replace("$checked$",strdisable);

                this.ele.appendChild(newDiv);
                setTimeout(function(){newDiv.style.cssText="";},10);
                document.querySelector("#iqxin-newTitle").select();
            },
            addEditBoxEnger: function(){
                var otitle,olink,oimg,oblank,odisabled;
                otitle = document.querySelector("#iqxin-newTitle").value;
                olink = document.querySelector("#iqxin-newLink").value;
                oimg = document.querySelector("#iqxin-newIcon").value;
                oblank = document.querySelector("#iqxin-newTarget").selectedIndex;
                odisabled = document.querySelector("#iqxin-newDisabled").checked;

                this.editTemp.dataset.iqxintitle = otitle;
                this.editTemp.lastChild.innerText = otitle;  //文本节点

                this.editTemp.dataset.iqxinlink = olink;
                this.editTemp.dataset.iqxinimg = oimg;
                this.editTemp.firstChild.src = oimg;

                // 是否新标签页打开
                if (oblank){
                    this.editTemp.removeAttribute("data-iqxintarget");
                } else {
                    this.editTemp.dataset.iqxintarget = "_blank";
                }
                // 是否禁用
                if (odisabled){
                    this.editTemp.dataset.iqxindisabled = "true";
                } else{
                    this.editTemp.removeAttribute("data-iqxindisabled");
                }

                // 修改完成,移除添加框
                this.addItemBoxRemove();
            },

            // 标题编辑
            addTitleEditBox: function(e){
                this.addItemBoxRemove();

                var element = e.target.parentNode.firstChild;
                element.classList.remove("iqxin-pointer-events");

                var flag = document.querySelector("#titleEdit");
                // 存在编辑的标题 && 之前的编辑的节点与点击的节点是同一个节点
                if(flag && flag.parentNode == element){
                        element.innerHTML = element.firstChild.value?element.firstChild.value:"空";
                        element.classList.add("iqxin-pointer-events");
                } else {
                    //  存在编辑的标题,但与点击的不是同一个节点
                    if(flag){
                        flag.parentNode.innerHTML = flag.parentNode.firstChild.value;
                    }
                    var oldhtml = element.innerHTML;
                    var newobj = document.createElement("input");
                    newobj.id = "titleEdit";
                    newobj.type = "text";
                    newobj.value = oldhtml;
                    // newobj.onblur = function(){
                    //     element.innerHTML = this.value?this.value:oldhtml;
                    // }
                    newobj.onkeydown = function(e){
                        if((e.keyCode || e.which) == 13){
                            element.innerHTML = this.value?this.value:oldhtml;
                        } else if((e.keyCode || e.which) == 27){
                            element.innerHTML = oldhtml;
                        }

                        element.classList.add("iqxin-pointer-events");
                    }
                    element.innerHTML = "";
                    element.appendChild(newobj);
                    newobj.select();
                }
            },
            addTitleEditBoxRemove:function(){
                var odiv = document.querySelector("#titleEdit");
                if(odiv){
                    odiv.parentNode.innerHTML = odiv.value?odiv.value:"空";
                }
            },

            // 高级菜单,配置文件编辑界面
            editCodeBox: function(){
                console.log("原始数据： ",getSettingData);
                var userSetting = GM_getValue("searchEngineJumpData")
                var editbox = document.createElement("div");
                // var sData =
                editbox.id = "iqxin-editCodeBox";
                editbox.style.cssText = "position:fixed;" +
                    "top:50%;left:50%;" +
                    "transform:translate(-50%,-50%);" +
                    "background:#ccc;" +
                    "border-radius:4px;" +
                    "padding:10px 20px;" ;
                var innerH = " "+
                    "<p><span style='color:red;font-size:1.2em;'>! ! !</span></br>"+
                    "此处有更多的设置选项,自由度更高,</br>"+
                    "但设置错误会导致脚本无法运行"+
                    "</p>" +
                    "<textarea wrap='off' cols='45' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify(userSetting,false,4) + "</textarea>" +
                    "<br>" +
                    "<button id='xin-reset'>清空设置</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-copyCode'>复制</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='codeboxclose' class='iqxin-closeBtn'>关闭</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-codeboxsave' class='iqxin-enterBtn'>保存</button>" +
                    "<button id='xin-fulibtn' class='iqxin-fuliBtn'>福利</button>" +
                "";
                // console.log(JSON.stringify(getSettingData,4));
                // console.log(JSON.stringify(getSettingData,null,4));
                editbox.innerHTML = innerH;
                this.ele.appendChild(editbox);
            },
            editCodeBoxSave: function(){
                var codevalue = document.querySelector("#iqxin-editCodeBox textarea").value;
                if(codevalue){
                    // console.log(JSON.parse(codevalue));
                    GM_setValue("searchEngineJumpData",JSON.parse(codevalue));
                    // console.log(GM_getValue("searchEngineJumpData"));
                    // 刷新页面
                    setTimeout(function(){
                        window.location.reload();
                    },300);
                } else {
                    // alert("输入为空");
                    this.reset();
                }
            },
            editCodeBoxClose: function(){
                var box = document.querySelector("#iqxin-editCodeBox");
                if(box){
                    box.parentNode.removeChild(box);
                }
            },

            // 导入窗口
            addImportingBox: function(){
                var odiv = document.querySelector("#importingBox");
                if (odiv){
                    this.boxClose("#importingBox");
                    return;
                }
                var newDiv = document.createElement("div");
                newDiv.id= "importingBox";

                var a ="<p>更加细分的搜索列表, 列表之间会有所重合</p>" +
                       "<ul>";

                for(let i=0;i<engineList_plus.length;i++){
                    // if(engineList_plus.status!=3){continue};
                    console.log(engineList_plus[i]);

                    // 包含网站名称
                    var includeWeb = "";
                    for(let j=0; j<engineList_plus[i].engineList.length;j++){
                        if(j!=0){
                            includeWeb += " | " + engineList_plus[i].engineList[j].name;
                        } else{
                            includeWeb += engineList_plus[i].engineList[j].name;
                        }
                    }

                    a += "<li>"+
                        "<span class='xin-importing-item' xin-importing-id='" + i +"' title='"+ (engineList_plus[i].message?engineList_plus[i].message:engineList_plus[i].engineDetails[0]) +"'>"+ (engineList_plus[i].name?engineList_plus[i].name:engineList_plus[i].engineDetails[0]) + " : </span>" +
                        "<p title='"+ includeWeb +"'>"+ includeWeb +"</p>"
                        "</li>";
                }

                a += "</ul>";

                newDiv.innerHTML=a;

                this.ele.appendChild(newDiv);
            },
            addImportingEnger:function(e){
                // console.log(e);
                // console.log("第几个： ",e.target.getAttribute("xin-importing-id"));
                var engineListID = e.target.getAttribute("xin-importing-id");
                var engineList_temp = engineList_plus[engineListID];
                var elist = engineList_temp.engineList;

                var name = engineList_temp.engineDetails[0];
                var innerName = engineList_temp.engineDetails[1];

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                var innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                    "";

                // 具体列表
                for(let i=0;i<elist.length;i++){
                    var a = '<span draggable="true" class="drag">' +
                                '<span class="sej-engine"' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                                '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                    '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                                '</span> ' +
                                '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                    '<img class="sej-engine-icon" src="' + icon.del + '">' +
                                '</span>' +
                            '</span>';

                    a = a.replace("$img$", elist[i].favicon)
                        .replace("$title$", elist[i].name)
                        .replace("$link$", elist[i].url);

                    if (elist[i].blank){
                        a = a.replace('$blank$', "_blank");
                    } else {
                        a = a.replace('data-iqxintarget="$blank$"', '');
                    };

                    a = a.replace('$name$', elist[i].name)
                        .replace('$favicon$', elist[i].favicon);

                    innerHTML += a;
                }

                 innerHTML += "" +
                    '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";


                odiv.innerHTML = innerHTML;

                this.addItemBoxRemove("#importingBox");

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },
            // 添加福利搜索  与上面的函数大量重复，可提出一个共用函数
            addImportingFuLiEnger:function(e){
                // console.log(e);
                // console.log("第几个： ",e.target.getAttribute("xin-importing-id"));
                // var engineListID = e.target.getAttribute("xin-importing-id");
                // var engineList_temp = engineList_plus[engineListID];
                var elist = engineList_fuli[0].engineList;

                var name = engineList_fuli[0].engineDetails[0];
                var innerName = engineList_fuli[0].engineDetails[1];

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                var innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                    "";

                // 具体列表
                for(let i=0;i<elist.length;i++){
                    var a = '<span draggable="true" class="drag">' +
                                '<span class="sej-engine"' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                                '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                    '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                                '</span> ' +
                                '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                    '<img class="sej-engine-icon" src="' + icon.del + '">' +
                                '</span>' +
                            '</span>';

                    a = a.replace("$img$", elist[i].favicon)
                        .replace("$title$", elist[i].name)
                        .replace("$link$", elist[i].url);

                    if (elist[i].blank){
                        a = a.replace('$blank$', "_blank");
                    } else {
                        a = a.replace('data-iqxintarget="$blank$"', '');
                    };

                    a = a.replace('$name$', elist[i].name)
                        .replace('$favicon$', elist[i].favicon);

                    innerHTML += a;
                }

                 innerHTML += "" +
                    '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";

                odiv.innerHTML = innerHTML;

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },

            // “设置按钮” 透明度
            setBtnOpacityFun: function(){
                if(~window.navigator.userAgent.indexOf("Chrome")){
                    var odom = document.querySelector("#setBtnOpacityRange");
                    var odomV = odom.value;
                    // odom.style.backgroundSize = odom.value*100 +"% 100%";
                    console.log(odomV,getSettingData.setBtnOpacity);
                    if(getSettingData.setBtnOpacity<0){
                        document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = odomV;
                        odom.style.background = "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
                    }else{
                        document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = "禁用";
                        odom.style.background = "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
                    }
                    odom.style.backgroundSize = odom.value*100 +"% 100%";

                    getSettingData.setBtnOpacity = -getSettingData.setBtnOpacity;
                } else {
                    // console.log("非chrome");
                    iqxinShowTip("抱歉,目前只支持chrome类浏览器",2500);
                }
            },

            // 标题点击 （开关搜索列表）（可以并入到下面的点击事件）
            titleClick: function(e){
                var target = e.target;
                target.dataset.xin = -parseInt(target.dataset.xin);
                target.dataset.xin>0 ? iqxinShowTip("启用") : iqxinShowTip("禁用");
            },
            // 点击事件   此处的 if 需要根据实际情况替换成 elseif (switch)
            domClick: function(e){
                var targetClass = e.target.className;
                var targetid = e.target.id;
                debug("点击事件：%o, ID: %o, class: %o, e: %o",e.target,targetid,targetClass,e)

                // 删除搜索
                if(~e.target.className.indexOf("iqxin-set-del")){
                    // console.log(e.target);
                    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                };
                // 删除搜索列表
                if(~e.target.className.indexOf("iqxin-set-title-del")){
                    // console.log(e.target, e.target.parentNode.parentNode);
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                };

                if(~e.target.className.indexOf("iqxin-additem")){
                    this.parentNode = e.target.parentNode;
                    this.addItemBox();
                };
                if(e.target.className==="sej-engine"){
                    e.target.dataset.iqxindisabled = e.target.dataset.iqxindisabled ? "":  "true";
                    e.target.dataset.iqxindisabled ? iqxinShowTip("禁用") : iqxinShowTip("启用");
                };
                if(~targetClass.indexOf("addItemBoxCancel")){
                    this.addItemBoxRemove();
                };
                // 添加新的搜索 确定
                if(~targetClass.indexOf("addItemBoxEnter")){
                    this.addItemEnger();
                };
                // 添加新的搜索列表 确定
                if(targetid === "nSearchList"){
                    debug("添加新的搜索列表");
                    this.addSearchListBox();
                };
                if(targetid === "addSearchListBoxEnter"){
                    debug("向网页添加元素");
                    this.addSearchListEnger();
                };
                if(targetid === "addSearchListBoxCancel"){
                    debug("移除盒子");
                    // this.boxClose("#newSearchListBox");
                    this.addItemBoxRemove("#newSearchListBox");
                };

                // 修改搜索 确定
                if(~targetClass.indexOf("editItemBoxEnter")){
                    this.addEditBoxEnger();
                };

                // 编辑框
                if(~e.target.className.indexOf("iqxin-set-edit")){
                    this.addEditBox(e);
                }
                // 标题编辑框
                if(~targetClass.indexOf("iqxin-title-edit")){
                    e.stopPropagation();
                    this.addTitleEditBox(e);
                }
                if(~targetClass.indexOf("sejtitle")){
                    this.titleClick(e);
                }
                // codebox  源代码编辑框
                if(targetid ==="codeboxclose"){
                    this.editCodeBoxClose();
                } else if(targetid==="xin-reset"){
                    this.reset();
                } else if( targetid === "xin-codeboxsave"){
                    this.editCodeBoxSave();
                } else if( targetid === "xin-fulibtn"){
                    this.addImportingFuLiEnger();
                } else if( targetid === "xin-copyCode"){
                    GM_setClipboard(JSON.stringify(getSettingData,false,4));
                    iqxinShowTip("复制成功");
                }

                //  点击更多菜单
                if(targetid ==="moreSet"){
                    document.querySelector("#btnEle2").classList.toggle("btnEle2active");
                    // iqxin-btn-active
                    e.target.classList.toggle("iqxin-btn-active");
                }

                // 点击导入菜单
                if(targetid ==="xin-importing"){
                    this.addImportingBox();
                }
                if(targetClass ==="xin-importing-item"){
                    this.addImportingEnger(e);
                }

                // 关闭"设置菜单按钮"
                if(targetClass === "iqxin-setBtnOpacityRangeValue"){
                    this.setBtnOpacityFun();
                }

                // 关闭设置菜单
                if (targetid === "xin-close"){
                    this.hide();
                }

                // 空白地方点击
                if(~targetClass.indexOf("iqxin-items") || targetid === "settingLayer" || targetClass==="btnEleLayer"){
                    this.allBoxClose();
                }
            },

            // 关闭所有次级窗口、菜单
            allBoxClose: function(){
                this.addItemBoxRemove(); // 新的搜索添加框
                this.addDelremove();  //  增加/删除界面
                this.editCodeBoxClose(); // code编辑框
                this.addTitleEditBoxRemove(); //标题编辑框
                this.addItemBoxRemove("#newSearchListBox"); // 添加新的搜索列表
                this.boxClose("#iqxin-sortBox"); // 搜索列表排序
                this.addItemBoxRemove("#importingBox"); //导入框
                document.querySelector("#btnEle2").classList.remove("btnEle2active"); // 更多设置
            },

            // 窗口位置拖动
            setDragNode: function(ele) {
                var node = document.querySelector("#dragDom");

                node.addEventListener("mousedown",function(event){
                    ele.style.transition = "null";
                    // offsetLeft 距离 body 的位置, 得到的 dis 即鼠标到窗口左上角的位置
                    var disX = event.clientX - ele.offsetLeft;
                    var disY = event.clientY - ele.offsetTop;

                    var move = function(event) {
                        //鼠标的位置减去到左上角的位置 即窗口的位置
                        // console.log(event.clientX - disX,event.clientY - disY)
                        ele.style.left = event.clientX - disX + "px";
                        ele.style.top = event.clientY - disY  + "px";
                    };

                    document.addEventListener("mousemove",move);
                    document.addEventListener("mouseup",function(){
                        ele.style.transition = "0.5s";
                        document.removeEventListener("mousemove",move);
                    })
                });
            },

            // 拖动
            domdragstart:function (e) {
                if(~this.className.indexOf("sejtitle")){
                    dragEl = this.parentNode;
                } else{
                    dragEl = this;
                }
                dragData = dragEl.innerHTML;
                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/html",dragEl.innerHTML);
            },
            domdragenter:function (e) {
                var target = e.target;
                var targetClass = target.className;
                if(~targetClass.indexOf("sejtitle")){
                    target = target.parentNode;
                }
                target.classList.add('drop-over');
            },
            domdragover:function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                e.dataTransfer.dropEffect = 'move';
                return false;
            },
            domdragleave:function (e) {
                var target = e.target;
                var targetClass = target.className;
                if(~targetClass.indexOf("sejtitle")){
                    target = target.parentNode;
                }
                target.classList.remove('drop-over');
            },
            domdrop:function (e) {
                debug("拖拽结束")
                // e.target === this
                var _this = e.target;
                var that = _this.parentNode;
                var pparentNode = that.parentNode;

                // 防止跨区域移动
                SEJsetting.prototype.domdropend();
                if(dragEl.className != that.className){
                    console.log("移动对象 之前,现在: ", dragEl.className);
                    console.log(that.className);
                    return;
                }

                // Sortable.js https://github.com/RubaXa/Sortable
                var targetRect = _this.getBoundingClientRect(); //
                var width = targetRect.right - targetRect.left; //目标节点的宽
                var height = targetRect.bottom - targetRect.top; //目标节点的高
                var domPosition = null;
                if(~_this.className.indexOf("sejtitle")){
                    debug(e.clientX,targetRect.left,height,e.clientX - targetRect.left,(e.clientX - targetRect.left) / height)
                    if((e.clientX - targetRect.left) / width > 0.5){
                        debug("右");
                        domPosition = true;
                    }else{
                        debug("左");
                        domPosition = false;
                    }
                } else {
                    if((e.clientY - targetRect.top) / height > 0.5){
                        debug("下");
                        domPosition = true;
                    }else{
                        debug("上");
                        domPosition = false;
                    }
                }

                dragEl.style.transformOrigin = "top center";
                dragEl.style.animation = "sejopen 0.3s";

                if(domPosition){
                    if(pparentNode.lastChild == that){
                        pparentNode.insertBefore(dragEl,that);
                    }else{
                        pparentNode.insertBefore(dragEl,that.nextElementSibling)
                    }
                }else{
                    that.parentNode.insertBefore(dragEl,that);
                }

                // 重新绑定拖拽事件
                SEJsetting.prototype.dragEvent();
                return false;
            },
            domdropend:function(){
                var dom = document.querySelector(".drop-over");
                if(dom){
                    dom.classList.remove("drop-over")
                }
            },

            // 判断是否能连接至google
            isOnline: function(){
                console.log("this.online",this.online);
                if(this.online)return;

                var that = this;
                var myImage = new Image;
                myImage.src = 'https://www.google.com/s2/favicons?domain=www.baidu.com&' + Math.random() ;
                setTimeout(function(){
                    // console.log("取消加载");
                    console.log(myImage.width);
                    if(myImage.width){
                        that.online = true;
                    }else{
                        myImage.src = undefined;
                    };
                },2000);
            },

            // 重新加载工具
            reloadSet: function(){
                var elems = document.querySelectorAll('#sej-container, #settingLayerMask, sejspan.sej-drop-list');
                if (!elems) return;
                console.log("elems: " + elems);
                // return;

                [].forEach.call(elems, function(elem) {
                    elem.parentNode.removeChild(elem);
                });

                iqxinstart();
                iqxinShowTip("保存成功");
            },

            // 设置按钮透明度设置
            rangeChange: function(bool){
                var odom = document.querySelector("#setBtnOpacityRange");
                if(getSettingData.setBtnOpacity<0){
                    odom.style.background = "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
                    odom.style.backgroundSize = odom.value*100 +"% 100%";
                    document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = "禁用";
                    getSettingData.setBtnOpacity = -odom.value;
                } else{
                    odom.style.background = "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
                    odom.style.backgroundSize = odom.value*100 +"% 100%";
                    document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = odom.value;
                    getSettingData.setBtnOpacity = odom.value;
                }
            },

            // 窗口大小改变
            windowResize: function(){
                var eleStyle = window.getComputedStyle(this.ele , null);
                var w = parseInt(eleStyle.width) ;
                var h = parseInt(eleStyle.height)  + 54;
                var ww = document.documentElement.clientWidth;
                var wh = document.documentElement.clientHeight;
                var maskStyle = this.mask.style;

                if(w>=ww){
                    maskStyle.justifyContent = "stretch";
                }else{
                    maskStyle.justifyContent = "center";
                }
                if(h>=wh){
                    maskStyle.alignItems = "stretch";
                }else{
                    maskStyle.alignItems = "center";
                }
            },
            saveData: function(){
                //
                this.addTitleEditBoxRemove(); //标题栏处于编辑状态

                var obj = {};
                var parentdiv = document.querySelectorAll("#settingLayer .iqxin-items");
                for (let i=0;i<parentdiv.length;i++){
                    var data = parentdiv[i].querySelectorAll(".sej-engine");
                    var id = parentdiv[i].id;
                    obj[id]=[];
                    for(let ii=0;ii<data.length;ii++){
                        if (data[ii].dataset.xin<0){
                            var ij = -ii;
                        } else {
                            ij = ii;
                        }
                        obj[id][ij]={};
                        obj[id][ij].favicon=data[ii].dataset.iqxinimg;
                        obj[id][ij].name=data[ii].dataset.iqxintitle;
                        obj[id][ij].url=data[ii].dataset.iqxinlink;
                        if(data[ii].dataset.iqxintarget){
                            obj[id][ij].blank=data[ii].dataset.iqxintarget;
                        };
                        if(data[ii].dataset.iqxindisabled){
                            obj[id][ij].disable=data[ii].dataset.iqxindisabled;
                        };
                        if(data[ii].dataset.iqxingbk){
                            obj[id][ij].gbk=data[ii].dataset.iqxingbk;
                        };
                    }
                }

                // 分类名称
                var engineDetails=[];

                // 分类排序
                var odetails = document.querySelectorAll(".sejtitle");
                var odetailsLength = odetails.length;
                for(let i=0;i<odetailsLength;i++){
                    debug(odetails[i]);
                    engineDetails[i] = [];
                    engineDetails[i][0] = odetails[i].firstChild.innerHTML;
                    engineDetails[i][1] = odetails[i].dataset.iqxintitle;
                    engineDetails[i][2] = odetails[i].dataset.xin>=0?true:false;
                }

                // 新标签页全局设置
                var onewtab = document.querySelector("#iqxin-globalNewtab").selectedIndex;
                var foldlist = document.querySelector("#iqxin-foldlist").checked;

                // 以防不测,重新获取本地配置文件
                var getData = GM_getValue("searchEngineJumpData");
                getData.newtab = onewtab;
                getData.foldlist = foldlist;
                getData.setBtnOpacity = getSettingData.setBtnOpacity;
                // getData.debug = document.querySelector("#iqxin-debug").checked;
                getData.center = document.querySelector("#iqxin-center").selectedIndex;
                getData.fixedTop = document.querySelector("#iqxin-fixedTop").checked;
                getData.allOpen = document.querySelector("#iqxin-allOpen-item").checked;
                getData.fixedTopUpward = document.querySelector("#iqxin-fixedTopUpward-item").checked;
                getData.transtion = document.querySelector("#iqxin-transtion").checked;
                getData.engineDetails = engineDetails;
                getData.engineList = obj;

                debug('将要保存的数据：',getData);
                GM_setValue("searchEngineJumpData",getData);
            },
            addGlobalStyle: function(){
                var head, style;
                var css =
                    "#settingLayerMask{" +
                        "display: none;" +
                        "justify-content: center;" +
                        "align-items: center;" +
                        "position: fixed;" +
                        "top:0; right:0; bottom:0; left:0;" +
                        "background-color: rgba(0,0,0,.3);" +
                        "backdrop-filter: blur(10px);" +
                        "z-index: 200000000;" +
                        "overflow: auto;" +
                        "font-family: arial,sans-serif;" +
                        "min-height: 100%;" +
                        "font-size:16px;" +
                        "transition:0.5s;" +
                        "opacity:0;" +
                        "user-select: none;" +
                        "-moz-user-select: none;" +
                        "padding-bottom: 80px;" +
                        "box-sizing: border-box;" +
                    "}" +
                    "#settingLayer{" +
                        "display: flex;" +
                        "flex-wrap: wrap;" +
                        "padding: 20px;" +
                        "margin: 2% 25px 50px 5px;" +
                        "background-color: #fff;" +
                        "border-radius: 4px;" +
                        "position: absolute;" +
                        "min-width: 700px;" +
                        "max-width: 94%;" +
                        "transition:0.5s;" +
                    "}" +
                    ".iqxin-items{" +
                        "min-width:5em;" +
                        "margin: 0 5px 0px;" +
                    "}" +
                    "#settingLayer .drag{" +
                        "display: block;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayer .sej-engine{" +
                        "display: inline-block;" +
                        "width: 100%;" +
                        "box-sizing: border-box;" +
                    "}" +
                    ".iqxin-pointer-events," +
                    ".sej-engine-icon," +
                    "#settingLayer .sej-engine *{" +
                        "pointer-events:none;" +
                    "}" +
                    ".sejtitle{" +
                        "text-align: center;" +
                        "padding: 2px 0;" +
                        "cursor: pointer;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayerMask [data-xin]{" +
                        "margin:4px 0;" +
                        "line-height:1.7;" +
                        "border-radius:4px;" +
                    "}" +
                    ".sejtitle:not([data-xin^='-']):hover{" +
                    "background:#cff9ff;" +
                    "}" +
                    ".sejcon [data-xin]{"+
                        "cursor: pointer;" +
                    "}" +
                    "#settingLayerMask .sej-engine:hover{" +
                        "background-color:#cff9ff" +
                    "}" +
                    "#settingLayerMask [data-iqxindisabled='true']," +
                    "[data-xin^='-']{" +
                        "background-color: #ccc;" +
                        "text-decoration: line-through;" +
                        "text-decoration-color:red;" +
                        "border-radius:2px;" +
                        "transition:.3s;" +
                    "}" +
                    "#settingLayerMask [data-iqxindisabled='true']:hover," +
                    "[data-xin^='-']:hover{" +
                        "background-color: #ffa2a2;" +
                    "}" +
                    "#settingLayerMask label{" +
                        "cursor:pointer;" +
                    "}" +
                    "#settingLayerMask .sej-engine-icon{" +
                        "vertical-align:middle;" +
                    "}" +
                    "#btnEle2," +
                    "#btnEle{" +
                        "position:absolute;" +
                        "width:100%;" +
                        "bottom: 0px;" +
                        "right: 0;" +
                        "background: #fff;" +
                        "border-radius: 4px;" +
                    "}" +
                    "#btnEle2 span," +
                    "#btnEle span{" +
                        "display: inline-block;" +
                        "background: #EFF4F8;" +
                        "border: 1px solid #3abdc1;" +
                        "margin: 12px auto 10px;" +
                        "color: #3abdc1;" +
                        "padding: 5px 10px;" +
                        "border-radius: 4px;" +
                        "cursor: pointer;" +
                        "outline: none;" +
                        "transition: 0.3s;" +
                    "}" +
                    "#btnEle a{" +
                        "color: #999;" +
                        "text-decoration: none;" +
                        "font-family: auto;" +
                    "}" +
                    "#btnEle a:hover{" +
                        "text-decoration: underline;" +
                        "color: #ef8957;" +
                    "}" +
                    "#btnEle2 span.feedback:hover," +
                    "#btnEle span.feedback:hover{" +
                        "border-color:#ef8957;" +
                    "}" +
                    "#btnEle2 span:not(.feedback):hover," +
                    "#btnEle span:not(.feedback):hover{" +
                        "background:#3ACBDD;" +
                        "color:#fff;" +
                    "}" +
                    "#btnEle .feedback{" +
                        "border-color: #aaa;" +
                    "}" +
                    "#btnEle2>div," +
                    "#btnEle>div{" +
                        "width: 100%;" +
                        "display:flex;" +
                        "justify-content: space-around;" +
                        "background: #EFF4F8;" +
                        "border-radius: 4px;" +
                    "}" +
                    "#btnEle2{" +
                        "visibility:hidden;" +
                        "opacity:0;" +
                        "transform:translate(0,40px);" +
                        "transition : 0.3s;" +
                    "}" +
                    "#btnEle2.btnEle2active{" +
                        "visibility:visible;" +
                        "opacity:1;" +
                        // "transform:translate(0,108px);"  // 两行的情况下
                        "transform:translate(0,53px);" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]{" +
                        "width: 12px;" +
                        "height: 12px;" +
                        "display: inline-block;" +
                        "text-align: center;" +
                        "vertical-align: middle;" +
                        "line-height: 18px!important;" +
                        "margin: 0 5px 5px 5px!important;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]:before{" +
                        "content: '';" +
                        "position: absolute;" +
                        "top: 0;" +
                        "left: 0;" +
                        "background: #fff;" +
                        "width: 100%;" +
                        "height: 100%;" +
                        "border: 1px solid #d9d9d9;" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]:checked:after{" +
                        'content: "✔";' +
                        "background-color: #63d4d8;" +
                        "position: absolute;" +
                        "top: 0;" +
                        "left: 0;" +
                        "width: 12px;" +
                        "height: 12px;" +
                        "border: 1px solid #63d4d8;" +
                        "color: #fff;" +
                        "font-size: 17px;" +
                    "}" +
                    ".drop-over{" +
                        "opacity: 0.6;" +
                    "}" +
                    ".iqxin-title-edit," +
                    ".iqxin-set-edit," +
                    ".iqxin-set-title-del," +
                    ".iqxin-set-del {" +
                        "visibility: hidden;" +
                        "opacity:0;" +
                        "position: absolute;" +
                        "background: rgba(207, 249, 255, 0.86);" +
                        "color: red;" +
                        "top: 50%;" +
                        "transform: translate(0,-50%);" +
                        "right: 0;" +
                        "padding: 3px 3px 6px 6px;" +
                        "border-radius: 2px;" +
                        "cursor: pointer;" +
                        "transition: .3s;" +
                    "}" +
                    ".iqxin-set-title-del.iqxin-set-active {" +
                        "background: #fff;" +
                        "border-radius: 50% 0 0 50%;" +
                    "}" +
                    ".iqxin-title-edit{" +
                        "padding: 0px 3px 6px 6px;" +
                    "}" +
                    "span.iqxin-additem {" +
                        "display: inline-block;" +
                        "text-align: center;" +
                        "width: 100%;" +
                        "margin: 10px 0;" +
                        "border: 1px dotted red;" +
                        "color: red;" +
                        "cursor: pointer;" +
                        "visibility:hidden;" +
                        "opacity:0;" +
                        "transition:0.3s;" +
                        "transform:scale(0);" +
                    "}" +
                    "span.iqxin-additem.iqxin-set-active {" +
                        "visibility:visible;" +
                        "opacity:1;" +
                        "margin:10px 0;" +
                        "transform:scale(1);" +
                    "}" +
                    "#settingLayer .sejtitle:hover .iqxin-title-edit," +
                    "#settingLayer .sejcon>span:hover .iqxin-set-edit{" +
                        "visibility:visible;" +
                        "opacity:0.8;" +
                    "}" +
                    "#nSearchList.iqxin-set-active," +
                    ".iqxin-set-edit.iqxin-set-active," +
                    ".iqxin-set-title-del.iqxin-set-active," +
                    ".iqxin-set-del.iqxin-set-active {" +
                        "visibility:visible !important;" +
                        "opacity:1 !important;" +
                    "}" +
                    "#btnEle span.iqxin-btn-active{" +
                        "color:red;" +
                        "border-color:red;" +
                    "}" +
                    "#newSearchListBox," +
                    "#newSearchBox{" +
                        "transition:0.6s;" +
                        "transform : translateY(0%);" +
                        "opacity: 1;" +
                        "position:fixed;" +
                        "z-index:200000100;" +
                        "top:50%;" +
                        "left:50%;" +
                        "padding:22px;" +
                        "background:rgb(29, 29, 29);" +
                        "border-radius:4px;" +
                        "color: #e8e8e8;" +
                        "margin: -149px -117px;" +
                    "}" +
                    "#newSearchListBox input," +
                    "#newSearchBox input{" +
                        "border: none;" +
                        "padding: 4px 0 4px 5px;" +
                        "border-radius: 4px;" +
                        "outline: none;" +
                    "}" +
                    "#newSearchListBox input:focus," +
                    "#newSearchBox input:focus {" +
                        "background: #f1d2d2;" +
                        "transition: 0.5s;" +
                    "}" +
                    ".addItemBoxBtn{" +
                        "cursor: pointer;" +
                        "background: #fff;" +
                        "border: none;" +
                        "border-radius: 4px;" +
                        "padding: 4px 10px;" +
                        "color: #333;" +
                        "transition:0.3s;" +
                    "}" +
                    "#xin-centerDisplay select," +
                    "#xin-newtab select{" +
                        "height:auto;" +
                        "border: none;" +
                        "outline: none;" +
                        "color: #3ABDC1;" +
                        "font-size: 1em;" +
                        "font-family: arial,sans-serif;" +
                        "appearance: none;" +
                        "-moz-appearance: none;" +
                        "-webkit-appearance: none;" +
                        "padding: 0px 5px;" +
                        "cursor: pointer;" +
                        "text-decoration: underline;" +
                        "background: #EFF4F8;" +
                    "}" +
                    "#titleEdit{" +
                        "width:6em;" +
                    "}" +
                    // 按钮效果 ： 确定 取消按钮
                    ".iqxin-closeBtn," +
                    ".iqxin-enterBtn{" +
                        "box-sizing: border-box;" +
                    "}" +
                    ".iqxin-closeBtn:hover{" +
                        "background: #ff6565;" +
                        "border-color: #ff6565;" +
                        "color: #fff;" +
                    "}" +
                    ".iqxin-enterBtn:hover{" +
                        "background: #84bb84;" +
                         "border-color: #84bb84;" +
                         "color: #fff;" +
                    "}" +
                    "#iqxin-editCodeBox button{" +
                        "cursor:pointer;" +
                    "}" +
                    ".iqxin-fuliBtn{" +
                        "border: none;" +
                        "background: none;" +
                        "color: #ccc;" +
                        "margin-left: 30px;" +
                    "}" +

                    // 关闭按钮
                    "#xin-close{" +
                        "background:white;" +
                        "color:#3ABDC1;" +
                        "line-height:20px;" +
                        "text-align:center;" +
                        "height:20px;" +
                        "width:20px;" +
                        "text-align:center;" +
                        "font-size:20px;" +
                        "padding:10px;" +
                        "border: 3px solid #3ABDC1;" +
                        "border-radius: 50%;" +
                        "transition: .5s;" +
                        "top: -20px;" +
                        "right:-20px;" +
                        "position: absolute;" +
                        "box-sizing: unset;" +
                    "}" +
                    "#xin-close::before{" +
                        "content:'\\2716';" +
                    "}" +
                    "#xin-close:hover{" +
                        "background: indianred;" +
                        "border-color: indianred;" +
                        "color: #fff;" +
                    "}" +
                    // type[range] 效果
                    "input[type=range] {" +
                        "outline: none;" +
                        "-webkit-appearance: none;" +
                        "background:-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff;" +
                        "border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/" +
                    "}" +
                    "input[type=range]::-webkit-slider-thumb {" +
                        "-webkit-appearance: none;" +
                    "} " +
                    "input[type=range]::-webkit-slider-runnable-track {" +
                        "height: 10px;" +
                        "border-radius: 10px; /*将轨道设为圆角的*/" +
                        "box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/" +
                    "}" +
                    "input[type=range]::-webkit-slider-thumb {" +
                        "-webkit-appearance: none;" +
                        "height: 18px;" +
                        "width: 18px;" +
                        "margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/" +
                        "background: #fff; " +
                        "border-radius: 50%; /*外观设置为圆形*/" +
                        "border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/" +
                        "box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/" +
                    "}" +
                    // 导入
                    "#importingBox{" +
                        "position:fixed;" +
                        "width:350px;" +
                        "top:50%;" +
                        "left:50%;" +
                        "transform:translate(-50%,-50%);" +
                        "padding: 15px 30px;" +
                        "border-radius: 4px;" +
                        "background:#1D1D1D;" +
                        "color:#fff;" +
                    "}" +
                    "#importingBox li{" +
                        "margin:5px;" +
                        "border-bottom:1px solid #3ACBDD;" +
                    "}" +
                    "#importingBox li p{" +
                        "white-space: nowrap;" +
                        "overflow: hidden;" +
                        "text-overflow: ellipsis;" +
                        "margin-top:0;" +
                        "margin-bottom:0;" +
                    "}" +
                    ".xin-importing-item{" +
                        "cursor:pointer;" +
                    "}" +
                    "";
                head = document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = css;
                head.appendChild(style);

                // 关闭设置菜单中的所有动画效果
                if(!getSettingData.transtion){
                    GM_addStyle("#settingLayer," +
                        "#btnEle span," +
                        "#btnEle2," +
                        ".iqxin-set-del," +
                        "span.iqxin-additem," +
                        "#newSearchBox," +
                        ".addItemBoxBtn," +
                        "#xin-close," +
                        "#settingLayerMask{" +
                            "transition:none;"+
                        "}"+
                        "#settingLayerMask{" +
                            "backdrop-filter:none;" +
                            "background-color: rgba(0,0,0,.7);" +
                        "}"+
                        "");
                }
            }
        };

        // 增加设置按钮
        if (getSettingData.setBtnOpacity>=0){
            var setBtn = document.createElement("span");
            setBtn.id = "setBtn";
            GM_addStyle("#setBtn{" +
                            "opacity:"+getSettingData.setBtnOpacity+";"+
                            "transition:0.5s;"+
                        "}"+
                        "#sej-container:hover span#setBtn{" +
                            "opacity:1;" +
                        "}" +
                        "");
            setBtn.innerHTML = "<img style='margin:0 0 -3px 6px;width:16px;vertical-align: baseline;display:inline-block;cursor:pointer;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSklEQVR4nGNkIAPYy8tzhLS2f0cWy42JYiTHLLI0TV6y7D82cXIcwUSqhr658/bhkaaeAyYvWfZ/0qLFW9HVs7JzOOLR8w+bObhCjIEBh4vxaaAEYIsijBCgleW4zGYipIDawEpYVgqnA8jNSqSAY28fP8PpgIEALORoUlWQwyp++8Ejks0iKQQYGRlxWs7AgNth+ABKCLRPmhqHT7GKvCwDAwMDQ11gxMRTr58UIMtNmzbjuZKejoSqghyhkGBkYGD4j8xhYGAgnANgvmvyj5RGT0gwYC4mU9y4bkUPAwPh6IAleEZisx7MAR42Nnhzyo4jR/4T4wAYICoNIFlOUH1dULglAwMDg7S4GPUcgAQIhtapV09PMDAwMHBxchBlIMvHj++JUEZ86tbnlxdgYGBg+PL1KwMxZhMVAmcuXmRgYEDELz7QuXXpewYGBoYbd+4QYzQDU012NuOmxvZJRKkmDIguyjc2dfrWZGczomhomToVrw9N9PUZGBiw54T1O3emc3Jzz2BgQIQYLlCTnQ3Xj2EQPkcYaGszsLDgL71JsZyBgcRccOHqVbwWELIcGyCrMiLHIlxgwKtjFAeYSkkJD6gD/Kur39DaQjNxmWScDkBPodQGWxrbU0+9fDIXpwNwOWJTQ8eSzY3tC4m1aHNje8mmhvY+FLGG9qQTr57MQVeL08cW4jJmJ14+OYUuTqiwwuYBczFpvZOvnl7Cpp7kIPdQUWG3KSz8QazlhADJ2XDHnTs/SdVDVQcwMDAwLJs6lR1djNwEDAB1JMSK2b7KxQAAAABJRU5ErkJggg=='>"
            document.querySelector("#sej-container").appendChild(setBtn);
            var sejSet = null;

            setBtn.addEventListener("click",setBtnStart);
        };

        // 注册菜单
        GM_registerMenuCommand("search jump 搜索跳转设置",setBtnStart);

        function setBtnStart(){
            if(!document.querySelector("#settingLayerMask")){
                sejSet = new SEJsetting();

                var sej_save = document.querySelector("#xin-save");
                // var sej_close = document.querySelector("#xin-close");
                // var sej_reset = document.querySelector("#xin-reset");
                var sej_addDel = document.querySelector("#xin-addDel");
                var sej_edit = document.querySelector("#xin-modification");

                // sej_save.addEventListener("click",function(){sejSet.saveData();sejSet.hide();if(!getSettingData.debug)window.location.reload();});
                sej_save.addEventListener("click",function(){sejSet.saveData();sejSet.hide();sejSet.reloadSet();});
                // sej_close.addEventListener("click",function(){sejSet.hide();});
                // sej_reset.addEventListener("click",function(){sejSet.reset();sejSet.hide();window.location.reload();});
                sej_addDel.addEventListener("click",function(e){sejSet.addDel(e);});
                // sej_edit.addEventListener("click",function(e){sejSet.addEdit(e);});
                sej_edit.addEventListener("click",function(){sejSet.editCodeBox();});

                window.addEventListener("resize",sejSet.windowResize.bind(sejSet));
            }
            sejSet.show();
        }

        // 获取存储的数据信息
        function get_data(){
            setData = GM_getValue("searchEngineJumpData");
        }
        var setData = null;
        // get_data();
    }

    // 从此处开始执行
    var debug;
    function reloadDebug(bool) {
        debug = bool ? console.info.bind(console) : function() {};
    }

    // 消息提示框
        // 目前只是为了给用户一个反馈。 - 成功了么 - 嗯,成功了
    var iqxinTimerGlobalTip = null
    function iqxinShowTip(text,duration){
        console.log("iqxin -- 消息提示框: ", text);
        var odom = document.querySelector("#iqixn-global-tip");
        if(!odom){
            odom = document.createElement("iqxinDiv");
            odom.id = "iqixn-global-tip";
            odom.style.cssText = "" +
                "opacity: 0;" +
                "height: 25px;" +
                "line-height: 25px;" +
                "letter-spacing: 1px;" +
                "font-size: 1em;" +
                "color: #fff;" +
                "padding: 5px 20px;" +
                "border-radius: 5px;" +
                "background-color: #666;" +
                "position: fixed;" +
                "z-index: 200000001;" +
                "left: 50%;" +
                "bottom: 5%;" +
                "transform: translate(-50%);" +
                "transition: .4s;" ;
            document.body.appendChild(odom);
        }

        odom.innerHTML=text;
        odom.style.opacity=1;

        duration = duration?duration:1500;
        //防止持续时间内多次触发提示
        if(!iqxinTimerGlobalTip){
            iqxinTimerGlobalTip = setTimeout(function(){
                odom.style.opacity=0;
                iqxinTimerGlobalTip = null;
            },duration);
        }
    }

    // hash-query  不刷新页面的搜索
        // hashchange 和 popstate 都无法检测到谷歌和百度搜索时网址的变化,不理解
    if (window.self != window.top) return;
    // 下面这种方法百度一直报错无法使用,遂用定时器
    // if (true) {
    //     console.log('iqxin添加标题节点监视器: title');

    //     var watch = document.querySelector('title');
    //     console.log("titile: ",watch);
    //     console.log("titile: ",document.title);
    //     new (window.MutationObserver || window.WebKitMutationObserver)(function(mutations){
    //         console.log('iqxin标题发生了变化', document.title);
    //         if(!document.querySelector('sejspan')){
    //          runInPageContext(contentScript);
    //         }
    //     }).observe(watch, {childList: true, subtree: true, characterData: true});
    // }
    // 给谷歌和百度搜索的主页单独加个列表
    var url = window.location.href;
    var hashList = [
        /^https?:\/\/www\.baidu\.com\/$/i,
        /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/$/i,
        /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
        /^https?:\/\/www\.youtube\.com\/results/,
        // /^https?:\/\/searx\.me\//i,
    ];
    // 部分网站或内因或外因的原因加载缓慢，所以推迟插入
    var delayList = [
        /^https?:\/\/google\.infinitynewtab\.com\/\?q/,
        /^https?:\/\/www\.zhihu\.com\/search\?/,
        /^https?:\/\/www\.iciba\.com\/word\?/,
    ]

    var hashListTag = hashList.some(function hashUrl(element, index, array){
            return ~url.search(element);
        });
    var delayListTag = delayList.some(function hashUrl(element, index, array){
            return ~url.search(element);
        });

    if (hashListTag){
        var oldTitle = document.title;
        var newTitle = "";
        var timer = setInterval(function(){
            // console.log("循环中",newTitle,oldTitle);
            newTitle = document.title;
            if (document.querySelector("#appbar") && !document.querySelector("sejspan")){
                // console.log("new");
                iqxinstart();
            } else if (document.querySelector("sejspan")){
                // console.log("已存在");
                clearInterval(timer);
            }else if (oldTitle!=newTitle){
                // console.log("不存在开始插入");
                iqxinstart();
            }
        },1000)
    } else if (delayListTag){
        // console.log("延时运行");
        setTimeout(function(){iqxinstart();},2000);
    } else {
        // console.log("普通插入");
        iqxinstart();
    }

})();
