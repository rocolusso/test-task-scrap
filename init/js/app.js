var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*! This file is auto-generated */
    // Source: wp-includes/js/twemoji.min.js
    var twemoji = function () {
        "use strict";
        var h = {
                base: "https://web.archive.org/web/20241221003015/https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/",
                ext: ".png",
                size: "72x72",
                className: "emoji",
                convert: {
                    fromCodePoint: function (d) {
                        d = "string" == typeof d ? parseInt(d, 16) : d;
                        if (d < 65536)
                            return e(d);
                        return e(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                    },
                    toCodePoint: o
                },
                onerror: function () {
                    this.parentNode && this.parentNode.replaceChild(x(this.alt, !1), this)
                },
                parse: function (d, u) {
                    u && "function" != typeof u || (u = {
                        callback: u
                    });
                    return h.doNotParse = u.doNotParse,
                        ("string" == typeof d ? function (d, a) {
                                    return n(d, function (d) {
                                        var u, f, c = d, e = N(d), b = a.callback(e, a);
                                        if (e && b) {
                                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'),
                                                u = a.attributes(d, e))
                                                u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, r), '"'));
                                            c = c.concat("/>")
                                        }
                                        return c
                                    })
                                }
                                : function (d, u) {
                                    var f, c, e, b, a, t, r, n, o, s, i, l = function d(u, f) {
                                        var c, e, b = u.childNodes, a = b.length;
                                        for (; a--;)
                                            c = b[a],
                                                3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || m.test(c.nodeName.toLowerCase()) || h.doNotParse && h.doNotParse(c) || d(c, f);
                                        return f
                                    }(d, []), p = l.length;
                                    for (; p--;) {
                                        for (e = !1,
                                                 b = document.createDocumentFragment(),
                                                 a = l[p],
                                                 t = a.nodeValue,
                                                 r = 0; o = g.exec(t);) {
                                            if ((i = o.index) !== r && b.appendChild(x(t.slice(r, i), !0)),
                                                o = o[0],
                                                s = N(o),
                                                r = i + o.length,
                                                i = u.callback(s, u),
                                            s && i) {
                                                for (c in (n = new Image).onerror = u.onerror,
                                                    n.setAttribute("draggable", "false"),
                                                    f = u.attributes(o, s))
                                                    f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !n.hasAttribute(c) && n.setAttribute(c, f[c]);
                                                n.className = u.className,
                                                    n.alt = o,
                                                    n.src = i,
                                                    e = !0,
                                                    b.appendChild(n)
                                            }
                                            n || b.appendChild(x(o, !1)),
                                                n = null
                                        }
                                        e && (r < t.length && b.appendChild(x(t.slice(r), !0)),
                                            a.parentNode.replaceChild(b, a))
                                    }
                                    return d
                                }
                        )(d, {
                            callback: u.callback || b,
                            attributes: "function" == typeof u.attributes ? u.attributes : a,
                            base: ("string" == typeof u.base ? u : h).base,
                            ext: u.ext || h.ext,
                            size: u.folder || function (d) {
                                return "number" == typeof d ? d + "x" + d : d
                            }(u.size || h.size),
                            className: u.className || h.className,
                            onerror: u.onerror || h.onerror
                        })
                },
                replace: n,
                test: function (d) {
                    g.lastIndex = 0;
                    d = g.test(d);
                    return g.lastIndex = 0,
                        d
                }
            }
            , u = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            }
            ,
            g = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
            , f = /\uFE0F/g
            , c = String.fromCharCode(8205)
            , t = /[&<>'"]/g
            , m = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/
            , e = String.fromCharCode;
        return h;

        function x(d, u) {
            return document.createTextNode(u ? d.replace(f, "") : d)
        }

        function b(d, u) {
            return "".concat(u.base, u.size, "/", d, u.ext)
        }

        function N(d) {
            return o(d.indexOf(c) < 0 ? d.replace(f, "") : d)
        }

        function r(d) {
            return u[d]
        }

        function a() {
            return null
        }

        function n(d, u) {
            return String(d).replace(g, u)
        }

        function o(d, u) {
            for (var f = [], c = 0, e = 0, b = 0; b < d.length;)
                c = d.charCodeAt(b++),
                    e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)),
                        e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
            return f.join(u || "-")
        }
    }();
    // Source: wp-includes/js/wp-emoji.min.js
    !function (c, l) {
        c.wp = c.wp || {},
            c.wp.emoji = new function () {
                var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver, a = c.document,
                    t = !1, r = 0, o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

                function i() {
                    return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
                }

                function s() {
                    if (!t) {
                        if (void 0 === c.twemoji)
                            return 600 < r ? void 0 : (c.clearTimeout(u),
                                u = c.setTimeout(s, 50),
                                void r++);
                        n = c.twemoji,
                            t = !0,
                        e && new e(function (u) {
                                for (var e, t, n, a, r = u.length; r--;) {
                                    if (e = u[r].addedNodes,
                                        t = u[r].removedNodes,
                                    1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error"))
                                        return;
                                    for (; n--;) {
                                        if (3 === (a = e[n]).nodeType) {
                                            if (!a.parentNode)
                                                continue;
                                            if (o)
                                                for (; a.nextSibling && 3 === a.nextSibling.nodeType;)
                                                    a.nodeValue = a.nodeValue + a.nextSibling.nodeValue,
                                                        a.parentNode.removeChild(a.nextSibling);
                                            a = a.parentNode
                                        }
                                        d(a.textContent) && f(a)
                                    }
                                }
                            }
                        ).observe(a.body, {
                            childList: !0,
                            subtree: !0
                        }),
                            f(a.body)
                    }
                }

                function d(u) {
                    return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
                }

                function f(u, e) {
                    var t;
                    return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {},
                        t = {
                            base: i() ? l.svgUrl : l.baseUrl,
                            ext: i() ? l.svgExt : l.ext,
                            className: e.className || "emoji",
                            callback: function (u, e) {
                                switch (u) {
                                    case "a9":
                                    case "ae":
                                    case "2122":
                                    case "2194":
                                    case "2660":
                                    case "2663":
                                    case "2665":
                                    case "2666":
                                        return !1
                                }
                                return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                            },
                            attributes: function () {
                                return {
                                    role: "img"
                                }
                            },
                            onerror: function () {
                                n.parentNode && (this.setAttribute("data-error", "load-failed"),
                                    n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                            },
                            doNotParse: function (u) {
                                return !(!u || !u.className || "string" != typeof u.className || -1 === u.className.indexOf("wp-exclude-emoji"))
                            }
                        },
                    "object" == typeof e.imgAttr && (t.attributes = function () {
                            return e.imgAttr
                        }
                    ),
                        n.parse(u, t)) : u
                }

                return l && (l.DOMReady ? s() : l.readyCallback = s),
                    {
                        parse: f,
                        test: d
                    }
            }
    }(window, window._wpemojiSettings);

}


var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    !function (a, b, c) {
        var d, e, f;
        d = "PIN_" + ~~((new Date).getTime() / 864e5), a[d] ? a[d] += 1 : (a[d] = 1, a.setTimeout(function () {
            e = b.getElementsByTagName("SCRIPT")[0], f = b.createElement("SCRIPT"), f.type = "text/javascript", f.async = !0, f.src = c.mainUrl + "?" + Math.random(), e.parentNode.insertBefore(f, e)
        }, 10))
    }(window, document, {mainUrl: "https://web.archive.org/web/20221108232337/https://assets.pinterest.com/js/pinit_main.js"});

}

var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*! This file is auto-generated */
    !function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
    }(function (f) {
        "use strict";

        function u(e) {
            return "function" == typeof e
        }

        var i, r, v = {interval: 100, sensitivity: 6, timeout: 0}, s = 0, a = function (e) {
            i = e.pageX, r = e.pageY
        }, p = function (e, t, n, o) {
            if (Math.sqrt((n.pX - i) * (n.pX - i) + (n.pY - r) * (n.pY - r)) < o.sensitivity) return t.off(n.event, a), delete n.timeoutId, n.isActive = !0, e.pageX = i, e.pageY = r, delete n.pX, delete n.pY, o.over.apply(t[0], [e]);
            n.pX = i, n.pY = r, n.timeoutId = setTimeout(function () {
                p(e, t, n, o)
            }, o.interval)
        };
        f.fn.hoverIntent = function (e, t, n) {
            function o(e) {
                var u = f.extend({}, e), r = f(this),
                    v = ((t = r.data("hoverIntent")) || r.data("hoverIntent", t = {}), t[i]),
                    t = (v || (t[i] = v = {id: i}), v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId)), v.event = "mousemove.hoverIntent.hoverIntent" + i);
                "mouseenter" === e.type ? v.isActive || (v.pX = u.pageX, v.pY = u.pageY, r.off(t, a).on(t, a), v.timeoutId = setTimeout(function () {
                    p(u, r, v, d)
                }, d.interval)) : v.isActive && (r.off(t, a), v.timeoutId = setTimeout(function () {
                    var e, t, n, o, i;
                    e = u, t = r, n = v, o = d.out, (i = t.data("hoverIntent")) && delete i[n.id], o.apply(t[0], [e])
                }, d.timeout))
            }

            var i = s++, d = f.extend({}, v);
            f.isPlainObject(e) ? (d = f.extend(d, e), u(d.out) || (d.out = d.over)) : d = u(t) ? f.extend(d, {
                over: e,
                out: t,
                selector: n
            }) : f.extend(d, {over: e, out: e, selector: t});
            return this.on({"mouseenter.hoverIntent": o, "mouseleave.hoverIntent": o}, d.selector)
        }
    });

}

var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    !function (a, b, c, d) {
        var e = a[d.k] = {
            w: a,
            d: b,
            n: c,
            a: d,
            s: {},
            f: function () {
                return {
                    callback: [],
                    debug: function (a) {
                        e.v.config.debug && (e.w.console && e.w.console.log ? e.w.console.log(a) : e.d.URL = e.d.URL + "#" + a)
                    },
                    listen: function (a, b, c, d) {
                        d ? "undefined" !== typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : "undefined" !== typeof a.detachEvent && a.detachEvent("on" + b, c) : "undefined" !== typeof e.w.addEventListener ? a.addEventListener(b, c, !1) : "undefined" !== typeof e.w.attachEvent && a.attachEvent("on" + b, c)
                    },
                    getEl: function (a) {
                        var b = null;
                        return b = a.target ? 3 === a.target.nodeType ? a.target.parentNode : a.target : a.srcElement
                    },
                    changeClass: function (a, b) {
                        var c = function (b) {
                            var c = new RegExp(b, "ig");
                            a.className = a.className.replace(c, "").replace(/  +/g, " ")
                        };
                        for (var d in b) {
                            var f = e.a.k + "_" + d;
                            c(f),
                            b[d] === !0 && (a.className = a.className + " " + f)
                        }
                    },
                    get: function (a, b) {
                        var c = "";
                        return c = "string" === typeof a[b] ? a[b] : a.getAttribute(b)
                    },
                    loadFont: function (a) {
                        e.w.setTimeout(function () {
                            e.v.ourStyles.sheet.insertRule('@font-face { font-family: "' + a.name + '"; src: url("' + a.url + '"); font-weight: normal; font-style: normal; }')
                        }, 1)
                    },
                    getData: function (a, b) {
                        return b = e.a.dataAttributePrefix + b,
                            e.f.get(a, b)
                    },
                    set: function (a, b, c) {
                        "string" === typeof a[b] ? a[b] = c : a.setAttribute(b, c)
                    },
                    make: function (a) {
                        var b, c, d = !1;
                        for (b in a)
                            if (a[b] && a[b].hasOwnProperty) {
                                d = e.d.createElement(b);
                                for (c in a[b])
                                    a[b][c] && a[b][c].hasOwnProperty && "string" === typeof a[b][c] && e.f.set(d, c, a[b][c]);
                                break
                            }
                        return d
                    },
                    kill: function (a) {
                        "string" === typeof a && (a = e.d.getElementById(a)),
                        a && a.parentNode && a.parentNode.removeChild(a)
                    },
                    replace: function (a, b) {
                        "object" === typeof a && "object" === typeof b && e.w.setTimeout(function () {
                            a.parentNode.insertBefore(b, a),
                                e.w.setTimeout(function () {
                                    e.f.kill(a)
                                }, 1)
                        }, 1)
                    },
                    parse: function (a, b) {
                        var c, d, e, f, g, h, i;
                        if (i = {},
                            c = a.split("#")[0].split("?"),
                            c[1])
                            for (d = c[1].split("&"),
                                     f = 0,
                                     g = d.length; f < g; f += 1)
                                if (e = d[f].split("="),
                                2 === e.length && b[e[0]]) {
                                    try {
                                        h = decodeURIComponent(e[1])
                                    } catch (j) {
                                        h = e[1]
                                    }
                                    i[e[0]] = h
                                }
                        return i
                    },
                    preventDefault: function (a) {
                        a.preventDefault ? a.preventDefault() : a.returnValue = !1
                    },
                    getVendorPrefix: function () {
                        var a = /^(moz|webkit|ms)(?=[A-Z])/i
                            , b = "";
                        for (var c in e.d.b.style)
                            if (a.test(c)) {
                                b = "-" + c.match(a)[0].toLowerCase() + "-";
                                break
                            }
                        return b
                    },
                    call: function (a, b) {
                        var c, d, f, g, h = "?";
                        c = e.f.callback.length,
                            d = e.a.k + ".f.callback[" + c + "]",
                            e.f.callback[c] = function (h) {
                                h && (h.theCall = a,
                                h.status && "failure" === h.status && (g = h.message || h.status,
                                "string" === typeof e.v.config.error && "function" === typeof e.w[e.v.config.error] && e.w[e.v.config.error](g),
                                    f = e.d.getElementById(e.a.k + ".f.callback[" + c + "]"),
                                f && f.src && e.f.log("&event=api_error&code=" + h.code + "&msg=" + g + "&url=" + encodeURIComponent(f.src.split("?")[0])))),
                                "function" === typeof b && b(h, c),
                                    e.f.kill(d)
                            }
                            ,
                        a.match(/\?/) && (h = "&"),
                            e.d.b.appendChild(e.f.make({
                                SCRIPT: {
                                    id: d,
                                    type: "text/javascript",
                                    charset: "utf-8",
                                    src: a + h + "callback=" + d
                                }
                            }))
                    },
                    btoa: function (a) {
                        var b = "data:image/svg+xml;base64,";
                        if (e.w.btoa)
                            b += e.w.btoa(a);
                        else
                            for (var c, d, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", g = 0; a.charAt(0 | g) || (f = "=",
                            g % 1); b += f.charAt(63 & c >> 8 - g % 1 * 8))
                                d = a.charCodeAt(g += .75),
                                    c = c << 8 | d;
                        return b
                    },
                    makeSVG: function (a, b) {
                        var c, d, f;
                        for (f = '<svg xmlns="http://www.w3.org/2000/svg" height="%h%px" width="%w%px" viewBox="%x1% %y1% %x2% %y2%"><g>',
                                 f = f.replace(/%h%/, a.h),
                                 f = f.replace(/%w%/, a.w),
                                 f = f.replace(/%x1%/, a.x1 || "0"),
                                 f = f.replace(/%y1%/, a.y1 || "0"),
                                 f = f.replace(/%x2%/, a.x2 || a.w),
                                 f = f.replace(/%y2%/, a.y2 || a.h),
                                 c = 0,
                                 d = a.p.length; c < d; c += 1)
                            f = f + '<path d="' + a.p[c].d + '"',
                                f = f + ' fill="#' + (b || a.p[c].f || "#000") + '"',
                            a.p[c].s && (f = f + ' stroke="#' + a.p[c].s + '"',
                            a.p[c].w || (a.p[c].w = "2"),
                                f = f + ' stroke-width="' + a.p[c].w + '"'),
                                f += "></path>";
                        return f += "</g></svg>",
                            e.f.btoa(f)
                    },
                    buildStyleSheet: function () {
                        var a, b, c, f;
                        a = e.f.make({
                            STYLE: {
                                type: "text/css"
                            }
                        }),
                            b = e.v.css,
                            b = b.replace(/\._/g, "." + d.k + "_");
                        var f = {
                            "%prefix%": e.f.getVendorPrefix(),
                            "%thinShadow%": "0 0 1px rgba(0,0,0,.5)",
                            "%widgetBorderRadius%": "16px",
                            "%buttonBorderRadius%": "3px",
                            "%buttonBorderRadiusTall%": "3px",
                            "%saveButtonBackgroundColor%": "#111",
                            "%play%": e.f.makeSVG(e.a.svg.play),
                            "%pause%": e.f.makeSVG(e.a.svg.pause),
                            "%forward%": e.f.makeSVG(e.a.svg.forward),
                            "%backward%": e.f.makeSVG(e.a.svg.backward),
                            "%above%": e.f.makeSVG(e.a.svg.above),
                            "%beside%": e.f.makeSVG(e.a.svg.beside),
                            "%logo%": e.f.makeSVG(e.a.svg.logo),
                            "%lockup%": e.f.makeSVG(e.a.svg.lockup),
                            "%pinit_en_red%": e.f.makeSVG(e.a.svg.pinit_en),
                            "%pinit_en_white%": e.f.makeSVG(e.a.svg.pinit_en, "fff"),
                            "%pinit_ja_red%": e.f.makeSVG(e.a.svg.pinit_ja),
                            "%pinit_ja_white%": e.f.makeSVG(e.a.svg.pinit_ja, "fff")
                        };
                        e.f.makeSVG(e.a.svg.pinit_en, "fff");
                        for (c in f)
                            f[c].hasOwnProperty && (b = b.replace(new RegExp(c, "g"), f[c]));
                        a.styleSheet ? a.styleSheet.cssText = b : a.appendChild(e.d.createTextNode(b)),
                            e.d.h ? e.d.h.appendChild(a) : e.d.b.appendChild(a),
                            e.v.ourStyles = a
                    },
                    presentation: function (a, b) {
                        var c, d, f = "", g = b || "";
                        for (c in a)
                            a[c].hasOwnProperty && "string" === typeof a[c] && (f = f + "\n  " + c + ": " + a[c] + ";");
                        g && f && (e.v.css = e.v.css + g + " { " + f + "\n}\n");
                        for (c in a)
                            a[c].hasOwnProperty && "object" === typeof a[c] && (d = g + " " + c,
                                d = d.replace(/ &/g, ""),
                                d = d.replace(/,/g, ", " + g),
                                e.f.presentation(a[c], d));
                        a === e.a.styles && e.w.setTimeout(function () {
                            e.f.buildStyleSheet()
                        }, 1)
                    },
                    log: function (a) {
                        if (!e.v.here.match(/^https?:\/\/(.*?\.|)(pinterest|pinadmin)\.com\//)) {
                            var b = "?type=pidget&guid=" + e.v.guid
                                , c = new Image;
                            e.a.tv && (b = b + "&tv=" + e.a.tv),
                            a && (b += a),
                            e.v.config.tag && (b = b + "&tag=" + e.v.config.tag),
                                b = b + "&via=" + encodeURIComponent(e.v.here),
                                c.src = e.a.endpoint.log + b
                        }
                    },
                    buildQuery: function (a) {
                        var b = "";
                        for (var c in a)
                            a.hasOwnProperty(c) && a[c] && (b && (b += "&"),
                                b = b + c + "=" + encodeURIComponent(a[c]));
                        return b
                    },
                    util: {
                        control: function (a) {
                            var b = "play";
                            a.el.className.match("_pause") && (b = "pause");
                            var c = a.el.parentNode.parentNode.parentNode;
                            c.getElementsByTagName("video")[0][b]();
                            var d = {
                                play: a.el.parentNode.getElementsByClassName(e.a.k + "_play")[0],
                                pause: a.el.parentNode.getElementsByClassName(e.a.k + "_pause")[0]
                            };
                            d.play.style.display = d.pause.style.display = "block",
                                d[b].style.display = "none"
                        },
                        noop: function () {
                        },
                        navigate: function (a) {
                            var b = e.f.getData(a.el, "log").split("_").pop()
                                , c = a.el.parentNode.parentNode.parentNode
                                , d = e.f.get(c, "data-pin-current") - 0
                                , f = c.getElementsByClassName(e.a.k + "_page");
                            if (f[d].className.match("hazVideo")) {
                                var g = f[d].getElementsByTagName("video");
                                if (g[0] && g[0].pause(),
                                    !d) {
                                    var h = a.el.parentNode.getElementsByClassName(e.a.k + "_controls")[0];
                                    h.style.display = "none",
                                        h.getElementsByClassName(e.a.k + "_play")[0].style.display = "block",
                                        h.getElementsByClassName(e.a.k + "_pause")[0].style.display = "none"
                                }
                            }
                            "forward" === b ? (e.f.changeClass(f[d], {
                                past: !0
                            }),
                                d += 1) : (e.f.changeClass(f[d], {
                                future: !0
                            }),
                                d -= 1,
                            d || f[d].className.match("hazVideo") && e.w.setTimeout(function () {
                                a.el.parentNode.getElementsByClassName(e.a.k + "_controls")[0].style.display = "block"
                            }, 250)),
                                e.f.set(c, "data-pin-current", d);
                            var j = c.getElementsByClassName(e.a.k + "_indicator");
                            for (i = 0; i < j.length; i += 1)
                                e.f.changeClass(j[i], {
                                    current: i === d
                                });
                            if ("forward" === b ? (e.f.changeClass(c, {
                                atStart: !1
                            }),
                                e.f.changeClass(f[d], {
                                    future: !1
                                }),
                            d === f.length - 1 && e.f.changeClass(c, {
                                atEnd: !0
                            })) : (e.f.changeClass(c, {
                                atEnd: !1
                            }),
                                e.f.changeClass(f[d], {
                                    past: !1
                                }),
                            0 === d && e.f.changeClass(c, {
                                atStart: !0
                            })),
                            f[d].className.match("hazVideo") && d) {
                                var g = f[d].getElementsByTagName("video");
                                g[0] && g[0].play()
                            }
                        },
                        open: function (a) {
                            e.w.open(a.href, "_blank")
                        },
                        pinAny: function () {
                            e.f.debug("opening the grid"),
                                e.d.b.appendChild(e.f.make({
                                    SCRIPT: {
                                        type: "text/javascript",
                                        charset: "utf-8",
                                        pinMethod: "button",
                                        guid: e.v.guid,
                                        src: e.a.endpoint.bookmark + "?guid=" + e.v.guid
                                    }
                                }))
                        },
                        pinOne: function (a) {
                            if (a.href) {
                                var b = e.f.parse(a.href, {
                                    url: !0,
                                    media: !0,
                                    description: !0
                                });
                                b.url && b.url.match(/^http/i) && b.media && b.media.match(/^http/i) ? (b.description || (e.f.log("&event=config_warning&warning_msg=no_description&href=" + encodeURIComponent(e.d.URL)),
                                    b.description = e.d.title),
                                b.description.length > 500 && (b.description = b.description.substring(0, 500)),
                                    e.w.open(a.href, "pin" + (new Date).getTime(), e.a.pop.base.replace("%dim%", e.a.pop.size))) : (e.f.log("&event=config_error&error_msg=invalid_url&href=" + encodeURIComponent(e.d.URL)),
                                    e.f.util.pinAny())
                            } else
                                a.media ? (a.url || (e.f.log("&event=config_warning&warning_msg=no_url&href=" + encodeURIComponent(e.d.URL)),
                                    a.url = e.d.URL),
                                a.description || (e.f.log("&event=config_warning&warning_msg=no_description&href=" + encodeURIComponent(e.d.URL)),
                                    a.description = e.d.title),
                                a.description.length > 500 && (a.description = a.description.substring(0, 500)),
                                    e.f.log("&event=button_pinit_custom"),
                                    a.href = e.v.config.pinterest + "/pin/create/button/?guid=" + e.v.guid + "&url=" + encodeURIComponent(a.url) + "&media=" + encodeURIComponent(a.media) + "&description=" + encodeURIComponent(a.description),
                                    e.w.open(a.href, "pin" + (new Date).getTime(), e.a.pop.base.replace("%dim%", e.a.pop.size))) : (e.f.log("&event=config_error&error_msg=no_media&href=" + encodeURIComponent(e.d.URL)),
                                    e.f.util.pinAny());
                            a.v && a.v.preventDefault ? a.v.preventDefault() : e.w.event.returnValue = !1
                        },
                        repinHoverButton: function (a) {
                            e.f.util.repin(a, !0)
                        },
                        repin: function (a, b) {
                            var c, d;
                            if ("object" === typeof a ? a.href && (d = a.href.split("/")[4]) : d = a,
                                parseInt(d)) {
                                var c = e.v.config.pinterest + e.a.path.repin.replace("%s", d) + "?guid=" + e.v.guid;
                                e.w.open(c, "pin" + (new Date).getTime(), e.a.pop.base.replace("%dim%", e.a.pop.size))
                            } else
                                e.f.debug(e.v.config.util + ".repin requires an integer pinId")
                        },
                        follow: function (a) {
                            e.w.open(a.href, "pin" + (new Date).getTime(), e.a.pop.base.replace("%dim%", e.a.pop.size))
                        },
                        log: function (a) {
                            a ? e.f.log("&" + e.f.buildQuery(a)) : e.f.debug(e.v.config.util + ".log requires valid query params")
                        }
                    },
                    buildOne: function (a, b) {
                        if (!b) {
                            var c = {};
                            "A" === a.tagName && a.href ? c.A = {
                                className: e.a.k + "_" + a.className.replace(/ /g, " " + e.a.k + "_"),
                                href: a.href
                            } : c.SPAN = {
                                className: e.a.k + "_" + a.className.replace(/ /g, " " + e.a.k + "_")
                            };
                            var d = e.f.make(c);
                            return e.f.buildOne(a, d),
                                d
                        }
                        if (a && a.length)
                            for (var f = 0; f < a.length; f += 1)
                                e.f.buildOne(a[f], b);
                        else
                            for (var g in a)
                                if ("string" === typeof a[g]) {
                                    var h = a[g];
                                    if ("text" === g && (b.innerHTML = b.innerHTML + h),
                                    "addClass" === g)
                                        for (var i = h.split(" "), f = 0; f < i.length; f += 1)
                                            b.className = b.className + " " + e.a.k + "_" + i[f];
                                    e.a.build.setStyle[g] && ("backgroundImage" === g ? b.style[g] = "url(" + h + ")" : b.style[g] = h),
                                    e.a.build.setData[g] && e.f.set(b, "data-pin-" + g, h)
                                } else if ("video" !== g) {
                                    var j = e.f.make({
                                        SPAN: {
                                            className: e.a.k + "_" + g.replace(/ /g, " " + e.a.k),
                                            "data-pin-href": e.f.getData(b, "href"),
                                            "data-pin-log": e.f.getData(b, "log")
                                        }
                                    });
                                    b.appendChild(j),
                                        e.f.buildOne(a[g], j)
                                } else {
                                    var k = "";
                                    a.video.addClass && (k = " " + e.a.k + "_" + a.video.addClass);
                                    var l = e.f.make({
                                        VIDEO: {
                                            poster: a.video.poster,
                                            preload: "auto",
                                            loop: "loop",
                                            playsinline: "playsinline",
                                            "class": e.a.k + "_video" + k
                                        }
                                    });
                                    a.video.mp4 && l.appendChild(e.f.make({
                                        SOURCE: {
                                            src: a.video.mp4,
                                            type: "video/mp4"
                                        }
                                    })),
                                    a.video.m3u8 && l.appendChild(e.f.make({
                                        SOURCE: {
                                            src: a.video.m3u8,
                                            type: "video/m3u8"
                                        }
                                    })),
                                        b.appendChild(l)
                                }
                    },
                    click: function (a) {
                        a = a || e.w.event;
                        var b, c, d, f;
                        b = e.f.getEl(a),
                        b && (c = e.f.getData(b, "log"),
                        !c && b.parentNode && (b = b.parentNode,
                            c = e.f.getData(b, "log")),
                        c && (d = e.f.getData(b, "x") || "",
                            f = e.f.getData(b, "href"),
                        d && "&" !== d.substr(0, 1) && (d = "&x=" + encodeURIComponent(d)),
                            e.f.log("&event=click&target=" + c + "&lang=" + e.v.lang + "&sub=" + e.v.sub + d + "&href=" + encodeURIComponent(f)),
                            "function" === typeof e.f.util[e.a.util[c]] ? e.f.util[e.a.util[c]]({
                                el: b,
                                href: f,
                                v: a
                            }) : f && e.w.open(f, "_blank")))
                    },
                    getSelection: function () {
                        return ("" + (e.w.getSelection ? e.w.getSelection() : e.d.getSelection ? e.d.getSelection() : e.d.selection.createRange().text)).replace(/(^\s+|\s+$)/g, "")
                    },
                    getStyle: function (a, b, c) {
                        var d = null;
                        return e.w.getComputedStyle ? d = e.w.getComputedStyle(a).getPropertyValue(b) : a.currentStyle && (d = a.currentStyle[b]),
                        d && c && (d = parseInt(d) || 0),
                            d
                    },
                    getPos: function (a) {
                        var b = a.getBoundingClientRect();
                        return {
                            top: b.top + e.w.scrollY,
                            left: b.left + e.w.scrollX,
                            bottom: b.bottom + e.w.scrollY,
                            right: b.right + e.w.scrollX
                        }
                    },
                    showHoverButton: function (a, b) {
                        e.f.kill(e.s.hoverButton);
                        var c = {
                            id: e.f.getData(a, "id"),
                            url: e.f.getData(a, "url"),
                            media: e.f.getData(a, "media"),
                            description: e.f.getData(a, "description"),
                            height: e.f.getData(a, "height") || e.v.config.height || "20",
                            color: e.f.getData(a, "color") || e.v.config.color || "gray",
                            shape: e.f.getData(a, "shape") || e.v.config.shape || "rect",
                            lang: e.f.getData(a, "lang") || e.v.config.lang,
                            tall: e.f.getData(a, "tall") || e.v.config.tall,
                            round: e.f.getData(a, "round") || e.v.config.round
                        };
                        "28" === c.height && (c.tall = !0),
                        "round" === c.shape && (c.round = !0);
                        var d, f;
                        if (b ? (c.round && (c.tall = !0),
                            d = a.naturalHeight,
                            f = a.naturalWidth) : (d = a.height,
                            f = a.width),
                        d > e.a.hoverButtonMinImgSize && f > e.a.hoverButtonMinImgSize) {
                            var g = ""
                                , h = "&lang=" + c.lang + "&sub=" + e.v.sub
                                , i = e.a.k + "_button_pin";
                            c.round ? (i = i + " " + e.a.k + "_round",
                                g = "&round=1") : i = i + " " + e.a.k + "_save",
                            c.tall && (i = i + " " + e.a.k + "_tall",
                                g += "&tall=1"),
                                h += g;
                            var j, k, k, j, l = e.f.getPos(a);
                            c.id ? (h = h + "&id=" + c.id,
                                j = e.v.config.pinterest + e.a.path.repin.replace(/%s/, c.id),
                                k = b ? "button_pinit_sticky_repin" : "button_pinit_floating_repin") : (j = e.v.config.pinterest + e.a.path.create + "guid=" + e.v.guid,
                                j = j + "&url=" + encodeURIComponent(c.url || e.d.URL),
                                j = j + "&media=" + encodeURIComponent(c.media || a.src),
                                j = j + "&description=" + encodeURIComponent(e.f.getSelection() || c.description || a.title || e.d.title),
                                k = b ? "button_pinit_sticky" : "button_pinit_floating"),
                                e.s.hoverButton = e.f.make({
                                    SPAN: {
                                        className: i,
                                        "data-pin-log": k,
                                        "data-pin-href": j
                                    }
                                }),
                            g && e.f.set(e.s.hoverButton, "data-pin-x", g),
                            c.round || (e.s.hoverButton.innerHTML = e.a.strings[c.lang].save),
                            c.id && e.f.set(e.s.hoverButton, "data-pin-id", c.id),
                            e.v.hazLoggedHoverButton || (b ? e.f.log("&event=impression_sticky" + h) : e.f.log("&event=impression_floating" + h),
                                e.v.hazLoggedHoverButton = !0),
                                e.s.hoverButton.style.position = "absolute",
                                e.s.hoverButton.style.top = l.top + e.a.hoverButtonOffsetTop + "px",
                                e.s.hoverButton.style.left = l.left + e.a.hoverButtonOffsetLeft + "px",
                                e.s.hoverButton.style.zIndex = "8675309",
                                e.d.b.appendChild(e.s.hoverButton)
                        }
                    },
                    over: function (a) {
                        var b, c;
                        b = a || e.w.event,
                            c = e.f.getEl(b),
                            e.f.canHazButton(c) ? (e.v.hazHoverButton || (e.v.hazHoverButton = !0),
                                e.f.showHoverButton(c)) : e.v.hazHoverButton && c !== e.s.hoverButton && (e.v.hazHoverButton = !1,
                                e.f.kill(e.s.hoverButton))
                    },
                    formatCount: function (a) {
                        return a ? a > 999 && (a = a < 1e6 ? parseInt(a / 1e3, 10) + "K+" : a < 1e9 ? parseInt(a / 1e6, 10) + "M+" : "++") : a = "0",
                            a += ""
                    },
                    structure: {
                        buttonPin: function (a, b) {
                            var c, d;
                            return c = {
                                className: "button_pin",
                                log: b.log
                            },
                            b.id && (c.id = b.id),
                            "button_pinit" === b.log && (c.tagName = "A",
                                c.href = e.v.config.pinterest + "/pin/create/button/?guid=" + e.v.guid + "-" + e.v.countButton + "&url=" + encodeURIComponent(b.url) + "&media=" + encodeURIComponent(b.media) + "&description=" + encodeURIComponent(b.description)),
                            "button_pinit_bookmarklet" === b.log && (c.href = e.v.config.pinterest + "/pin/create/button/"),
                                "button_pinit_repin" === b.log ? c.href = e.v.config.pinterest + "/pin/" + b.id + "/repin/x/?guid=" + e.v.guid : b.count && (a.count || "above" === b.count || "beside" === b.count && b.zero) && (d = e.f.formatCount(a.count),
                                    c.className = c.className + " " + b.count,
                                    c.x = d,
                                    c.count = {
                                        text: d,
                                        x: d
                                    }),
                                b.round ? c.className = c.className + " round" : "false" !== b.save ? (c.className = c.className + " save",
                                    c.text = e.a.strings[b.lang].save || e.a.strings[e.v.config.lang].save) : ("ja" === b.lang && (c.className = c.className + " ja"),
                                "red" === b.color && (c.className = c.className + " red"),
                                "white" === b.color && (c.className = c.className + " white")),
                            b.padded && (c.className = c.className + " padded"),
                            b.tall && (c.className = c.className + " tall"),
                                e.f.buildOne(c)
                        },
                        buttonFollow: function (a, b) {
                            var c = {
                                className: "button_follow",
                                log: "button_follow",
                                text: a.name
                            };
                            return b.tall && (c.className = c.className + " tall"),
                                a.id.match(/\//) ? c.href = e.v.config.pinterest + "/" + a.id + "/follow/?guid=" + e.v.guid : c.href = e.v.config.pinterest + "/" + a.id + "/pins/follow/?guid=" + e.v.guid,
                                e.v.countFollow = e.v.countFollow + 1,
                                e.f.buildOne(c)
                        },
                        embedGrid: function (a, b) {
                            var c, d, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                            if (a.data) {
                                for (c = a.data,
                                     (!b.columns || b.columns < 1 || b.columns > 10) && (b.columns = 5),
                                     b.height < 200 && (b.height = 340),
                                         s = e.v.config.pinterest + "/" + c.user.profile_url.split("pinterest.com/")[1],
                                         d = {
                                             className: "embed_grid c" + b.columns,
                                             log: "embed_grid",
                                             href: e.v.config.pinterest,
                                             hd: {
                                                 href: s,
                                                 img: {
                                                     backgroundImage: c.user.image_small_url.replace(/30x30_/, "60x60_")
                                                 },
                                                 pinner: {
                                                     text: c.user.full_name
                                                 }
                                             },
                                             bd: {
                                                 height: b.height - 110 + "px",
                                                 ct: []
                                             },
                                             ft: {
                                                 log: "embed_user_ft",
                                                 href: s + "pins/follow/?guid=" + e.v.guid,
                                                 button: {}
                                             }
                                         },
                                     b.noscroll && (d.className = d.className + " noscroll"),
                                     b.width && (d.width = b.width + "px"),
                                         f = [],
                                         g = 0; g < b.columns; g += 1)
                                    d.bd.ct.push({
                                        col: []
                                    }),
                                        f[g] = 0;
                                for (g = 0; g < c.pins.length; g += 1) {
                                    for (h = c.pins[g],
                                             i = f[0],
                                             j = 0,
                                             k = 0; k < b.columns; k += 1)
                                        f[k] < i && (j = k,
                                            i = f[k]);
                                    d.bd.ct[j].col.push({
                                        img: {
                                            href: e.v.config.pinterest + "/pin/" + h.id,
                                            backgroundImage: h.images["237x"].url,
                                            backgroundColor: h.dominant_color,
                                            paddingBottom: h.images["237x"].height / h.images["237x"].width * 100 + "%"
                                        }
                                    }),
                                        f[j] = f[j] + h.images["237x"].height
                                }
                                return c.board ? (d.className = d.className + " board",
                                    n = e.v.config.pinterest + c.board.url,
                                    d.hd.board = {
                                        text: c.board.name,
                                        href: n
                                    },
                                    l = n + "follow/?guid=" + e.v.guid,
                                    a.data.section ? (d.hd.board = {
                                        text: a.data.section.title,
                                        href: n + a.theCall.split("/pins/")[0].split("/").pop() + "/"
                                    },
                                        m = "embed_section_ft",
                                        e.v.countSection = e.v.countSection + 1) : (m = "embed_board_ft",
                                        d.ft.href = l,
                                        e.v.countBoard = e.v.countBoard + 1)) : (l = s + "pins/follow?guid=" + e.v.guid,
                                    m = "embed_user_ft",
                                    e.v.countProfile = e.v.countProfile + 1),
                                    o = e.a.strings[b.lang].followOn,
                                    p = o.split("%s"),
                                    q = "bottom",
                                    r = '<span class="' + e.a.k + '_string" data-pin-href="' + l + '" data-pin-log="' + m + '">' + p[0] + '</span><span class="' + e.a.k + '_logo" data-pin-href="' + l + '" data-pin-log="' + m + '"></span>',
                                "" === p[0] && (q = "top",
                                    r = '<span class="' + e.a.k + '_logo" data-pin-href="' + l + '" data-pin-log="' + m + '"></span><span class="' + e.a.k + '_string" data-pin-href="' + l + '" data-pin-log="' + m + '">' + p[1] + "</span>"),
                                    d.ft.button.label = {
                                        addClass: q,
                                        text: r
                                    },
                                    e.f.buildOne(d)
                            }
                        },
                        embedPin: function (a, b) {
                            var c, d, f, g, h, i, j, k = "", l = "";
                            if (b.width || (b.width = "small"),
                            a.data && a.data[0]) {
                                if (a.data[0].error)
                                    return e.f.log("&event=api_error&code=embed_pin_not_found&pin_id=" + a.data[0].id),
                                        !1;
                                switch (b.width) {
                                    case "large":
                                        e.v.countPinLarge = e.v.countPinLarge + 1,
                                            imgWidth = "600x",
                                            k = " large",
                                            l = "_large",
                                            j = 1,
                                            lineHeight = "1.11em";
                                        break;
                                    case "medium":
                                        e.v.countPinMedium = e.v.countPinMedium + 1,
                                            imgWidth = "345x",
                                            k = " medium",
                                            l = "_medium",
                                            j = .8,
                                            lineHeight = "1.23em";
                                        break;
                                    default:
                                        e.v.countPin = e.v.countPin + 1,
                                            imgWidth = "237x",
                                            j = .6,
                                            lineHeight = "1.24em"
                                }
                                g = a.data[0];
                                var m = (g.description || {}).trim();
                                i = {
                                    href: "https://web.archive.org/web/20200813193237/https://www.pinterest.com/pin/" + g.id + "/",
                                    addClass: "",
                                    className: "embed_pin" + k,
                                    id: g.id,
                                    log: "embed_pin",
                                    pages: {
                                        paddingBottom: "178%",
                                        overlay: {
                                            addClass: "",
                                            repin: {
                                                log: "embed_pin_repin" + l,
                                                id: g.id,
                                                text: e.a.strings[b.lang].save
                                            }
                                        }
                                    }
                                };
                                var n = function (a) {
                                    for (var b = a || [], c = 0; c < b.length; c += 1)
                                        for (var d = 0; d < b[c].blocks.length; d += 1)
                                            if (b[c].blocks[d].type && b[c].blocks[d].text && "story_pin_heading_block" === b[c].blocks[d].type)
                                                return b[c].blocks[d].text;
                                    return null
                                }
                                    , o = function () {
                                    var a = {
                                        height: "100%",
                                        width: "100%",
                                        image: {
                                            height: "100%",
                                            width: "100%",
                                            addClass: "coverMe",
                                            backgroundImage: g.images["237x"].url.replace(/\/237x\//, "/" + imgWidth + "/")
                                        }
                                    }
                                        , b = (g.videos || {}).video_list;
                                    b && (delete a.image,
                                        a.video = {
                                            addClass: "isNative",
                                            m3u8: b.V_HLSV4.url,
                                            mp4: b.V_720P.url,
                                            poster: b.V_HLSV4.thumbnail || b.V_720P.thumbnail
                                        }),
                                        i.pages = {
                                            paddingBottom: ~~(g.images["237x"].height / g.images["237x"].width * 1e4) / 100 + "%",
                                            page: {
                                                blocks: {
                                                    block: a
                                                }
                                            },
                                            overlay: i.pages.overlay
                                        },
                                    b && (i.addClass = i.addClass + " hazVideo",
                                        i.pages.overlay.controls = {
                                            pause: {
                                                log: "embed_story_pause"
                                            },
                                            play: {
                                                log: "embed_story_play"
                                            }
                                        })
                                }
                                    , p = {
                                    "0.1.0": !0,
                                    "0.3.0": !0,
                                    "0.4.0": !0,
                                    "0.7.0": !0,
                                    "0.8.0": !0,
                                    "0.9.0": !0,
                                    "0.10.0": !0
                                };
                                if (g.story_pin_data && g.story_pin_data.metadata && p[g.story_pin_data.metadata.version]) {
                                    var q = g.story_pin_data.metadata;
                                    if (e.f.debug("Story pin version: " + q.version + " ID: " + g.id),
                                    1 === q.template_type && g.story_pin_data.pages.length > 1 && g.story_pin_data.pages.splice(1, 1),
                                        g.story_pin_data.page_count) {
                                        var r = {};
                                        g.story_pin_data.page_count > 1 && (i.pages.overlay.forward_noop = {
                                            addClass: "nav",
                                            log: "embed_story_noop"
                                        },
                                            i.pages.overlay.forward = {
                                                addClass: "nav",
                                                log: "embed_story_forward"
                                            },
                                            i.pages.overlay.backward_noop = {
                                                addClass: "nav",
                                                log: "embed_story_noop"
                                            },
                                            i.pages.overlay.backward = {
                                                addClass: "nav",
                                                log: "embed_story_back"
                                            }),
                                            i.className = i.className + " atStart";
                                        var s = 0;
                                        for (c = 0; c < g.story_pin_data.pages.length; c += 1) {
                                            if (h = g.story_pin_data.pages[c],
                                                f = {
                                                    addClass: "page "
                                                },
                                            (h.style || {}).background_color && (f.backgroundColor = h.style.background_color),
                                                canHazPage = !1,
                                            "0.1.0" === q.version && (canHazPage = !0,
                                                f.blocks = {
                                                    0: {
                                                        addClass: "block",
                                                        height: "100%",
                                                        width: "100%"
                                                    }
                                                },
                                            h.image && (f.blocks[0].image = {
                                                addClass: "containMe",
                                                height: "100%",
                                                width: "100%",
                                                backgroundImage: h.image.images.originals.url.replace(/\/originals\//, "/" + imgWidth + "/"),
                                                backgroundColor: h.image.dominant_color || "#888"
                                            }),
                                            c || (f.blocks[0].image.addClass = "coverMe")),
                                            "0.3.0" === q.version)
                                                if (canHazPage = !0,
                                                    f.blocks = {
                                                        0: {
                                                            addClass: "block",
                                                            height: "100%",
                                                            width: "100%"
                                                        }
                                                    },
                                                    h.image)
                                                    f.blocks[0].image = {
                                                        addClass: "containMe",
                                                        height: "100%",
                                                        width: "100%",
                                                        backgroundImage: h.image.images.originals.url.replace(/\/originals\//, "/" + imgWidth + "/"),
                                                        backgroundColor: h.image.dominant_color || "#888"
                                                    },
                                                    c || (f.blocks[0].image.addClass = "coverMe");
                                                else if (h.video) {
                                                    var t = h.video.video_list.V_HLSV3_MOBILE
                                                        ,
                                                        u = t.url.replace(/\/hls\//, "/720p/").replace(/\.m3u8/, ".mp4");
                                                    t.url ? (f.blocks[0].container = {
                                                        addClass: "video",
                                                        video: {
                                                            height: "100%",
                                                            width: "100%",
                                                            mp4: u
                                                        }
                                                    },
                                                        f.addClass = f.addClass + "hazVideo ") : t.thumbnail && (f.blocks[0].image = {
                                                        height: "100%",
                                                        width: "100%",
                                                        backgroundImage: t.thumbnail.originals.url.replace(/\/originals\//, "/" + imgWidth + "/")
                                                    })
                                                }
                                            if ("0.4.0" === q.version)
                                                if (canHazPage = !0,
                                                    f.blocks = {
                                                        0: {
                                                            addClass: "block",
                                                            height: "100%",
                                                            width: "100%"
                                                        }
                                                    },
                                                    h.image)
                                                    f.blocks[0].image = {
                                                        addClass: "containMe",
                                                        height: "100%",
                                                        width: "100%",
                                                        backgroundImage: h.image.images.originals.url.replace(/\/originals\//, "/" + imgWidth + "/"),
                                                        backgroundColor: h.image.dominant_color || "#888"
                                                    },
                                                    c || (f.blocks[0].image.addClass = "coverMe");
                                                else if (h.video) {
                                                    var t = h.video.video_list.V_HLSV3_MOBILE
                                                        ,
                                                        u = t.url.replace(/\/v2\/hls\//, "/720p/").replace(/_mobile\.m3u8/, ".mp4");
                                                    t.url ? (f.blocks[0].video = {
                                                        height: "100%",
                                                        width: "100%",
                                                        mp4: u
                                                    },
                                                        f.addClass = f.addClass + "hazVideo ") : t.thumbnail && (f.blocks[0].image = {
                                                        height: "100%",
                                                        width: "100%",
                                                        backgroundImage: t.thumbnail.originals.url.replace(/\/originals\//, "/" + imgWidth + "/")
                                                    })
                                                }
                                            if ("0.7.0" === q.version && h.image_adjusted && h.image_adjusted.images && (canHazPage = !0,
                                                f.blocks = {
                                                    0: {
                                                        addClass: "block",
                                                        height: "100%",
                                                        width: "100%",
                                                        image: {
                                                            addClass: "containMe",
                                                            height: "100%",
                                                            width: "100%",
                                                            backgroundImage: h.image_adjusted.images.originals.url.replace(/\/originals\//, "/" + imgWidth + "/"),
                                                            backgroundColor: h.image_adjusted.dominant_color || "#888"
                                                        }
                                                    }
                                                },
                                            c || (f.blocks[0].image.addClass = "coverMe")),
                                            ("0.8.0" === q.version || "0.9.0" === q.version || "0.10.0" === q.version) && (canHazPage = !0,
                                                h.blocks)) {
                                                f.blocks = {};
                                                var v = 0;
                                                for (d = 0; d < h.blocks.length; d += 1) {
                                                    var w = h.blocks[d]
                                                        , x = w.block_style
                                                        , y = w.style || {};
                                                    if (x) {
                                                        var z = {
                                                            addClass: "block",
                                                            top: x.y_coord + "%",
                                                            left: x.x_coord + "%",
                                                            height: x.height + "%",
                                                            width: x.width + "%"
                                                        };
                                                        if (y.font) {
                                                            var A = y.font.key;
                                                            e.v.fonts[A] || (e.v.fonts[A] = {
                                                                name: y.font.name,
                                                                url: y.font.url
                                                            },
                                                                e.f.loadFont(e.v.fonts[A])),
                                                                z.fontFamily = y.font.name
                                                        }
                                                        if ("story_pin_heading_block" === w.type) {
                                                            w.backgroundColor = x.highlight_color;
                                                            var B = "top"
                                                                , C = "left";
                                                            y.alignment && 1 === y.alignment && (C = "center"),
                                                            y.vertical_alignment && (1 === y.vertical_alignment && (B = "middle"),
                                                            2 === y.vertical_alignment && (B = "bottom")),
                                                                z.container = {
                                                                    addClass: C + " " + B,
                                                                    paragraph: {
                                                                        backgroundColor: y.highlight_color || "",
                                                                        color: y.hex_color || "",
                                                                        text: w.text.replace(/(\n+)/g, "<br>")
                                                                    }
                                                                }
                                                        }
                                                        if ("story_pin_image_block" === w.type && (z.height = x.height + "%",
                                                            z.width = x.width + "%",
                                                            z.image = {
                                                                addClass: "containMe",
                                                                height: "100%",
                                                                width: "100%",
                                                                backgroundImage: w.image.images.originals.url.replace(/\/originals\//, "/" + imgWidth + "/"),
                                                                backgroundColor: w.image.dominant_color || "#888"
                                                            },
                                                        "100" !== x.height && (z.image.addClass = "coverMe")),
                                                        "story_pin_video_block" === w.type) {
                                                            var D = w.video.video_list.V_720P
                                                                , E = w.video.video_list.V_HLSV4
                                                                ,
                                                                F = w.video.video_list.V_720P.thumbnail || w.video.video_list.V_HLSV4.thumbnail;
                                                            D.url && E.url && (z.container = {
                                                                addClass: "video",
                                                                video: {
                                                                    mp4: D.url,
                                                                    m3u8: E.url,
                                                                    poster: F
                                                                }
                                                            },
                                                            c || (i.pages.overlay.controls = {
                                                                pause: {
                                                                    log: "embed_story_pause"
                                                                },
                                                                play: {
                                                                    log: "embed_story_play"
                                                                }
                                                            }),
                                                                f.addClass = f.addClass + "hazVideo ")
                                                        }
                                                        if ("story_pin_paragraph_block" === w.type) {
                                                            w.backgroundColor = x.highlight_color;
                                                            var B = "top"
                                                                , C = "left";
                                                            y.alignment && 1 === y.alignment && (C = "center"),
                                                            y.vertical_alignment && (1 === y.vertical_alignment && (B = "middle"),
                                                            2 === y.vertical_alignment && (B = "bottom")),
                                                                z.container = {
                                                                    addClass: C + " " + B,
                                                                    paragraph: {
                                                                        backgroundColor: y.highlight_color || "",
                                                                        color: y.hex_color || "",
                                                                        fontSize: y.font_size * j + "px",
                                                                        lineHeight: lineHeight,
                                                                        text: w.text.replace(/(\n+)/g, "<br>")
                                                                    }
                                                                },
                                                            y.font && y.font.min_size && y.font.min_size < y.font_size - 1 && (z.left = "2%",
                                                                z.width = "96%")
                                                        }
                                                        f.blocks["" + v] = z,
                                                            v += 1
                                                    }
                                                }
                                            }
                                            canHazPage && (i.pages["" + s] = f,
                                                myProgress = {
                                                    addClass: "indicator"
                                                },
                                            s || (myProgress.addClass = myProgress.addClass + " current"),
                                                r["" + s] = myProgress,
                                            s && (f.addClass = f.addClass + "future "),
                                                s += 1)
                                        }
                                        s && (i.pages.overlay.progress = r)
                                    }
                                } else
                                    o();
                                var G;
                                g.native_creator ? G = {
                                    "native": !0,
                                    url: g.native_creator.profile_url,
                                    title: n((g.story_pin_data || {}).pages) || m || g.native_creator.about,
                                    avatar: g.native_creator.image_small_url,
                                    credit: e.a.strings[b.lang].publishedBy,
                                    name: g.native_creator.full_name
                                } : g.rich_metadata ? (g.rich_metadata.products && "object" === typeof g.rich_metadata.products[0] && g.rich_metadata.products[0].offer_summary && g.rich_metadata.products[0].offer_summary.price && (i.pages.overlay.price = {
                                    text: g.rich_metadata.products[0].offer_summary.price,
                                    log: "embed_pin_price"
                                }),
                                    G = {
                                        title: g.rich_metadata.title,
                                        avatar: g.rich_metadata.favicon_images.orig,
                                        credit: g.rich_metadata.site_name,
                                        name: m
                                    },
                                (g.attribution || {}).author_name && (G.credit = e.a.strings[b.lang].by.replace(/%s/, g.attribution.author_name))) : G = {
                                    href: "https://web.archive.org/web/20200813193237/https://www.pinterest.com/" + g.pinner.profile_url,
                                    title: m,
                                    avatar: g.pinner.image_small_url,
                                    credit: g.pinner.full_name,
                                    name: g.board.name
                                },
                                    i.footer = {
                                        log: "embed_pin_follow",
                                        href: G.url,
                                        container: {
                                            title: {
                                                text: G.title
                                            },
                                            avatar: {
                                                backgroundImage: G.avatar
                                            },
                                            deets: {
                                                topline: {
                                                    text: G.credit
                                                },
                                                bottomline: {
                                                    text: G.name
                                                }
                                            }
                                        }
                                    },
                                    i.footer.container.deets.bottomline.text ? G["native"] && (i.footer.addClass = "native") : i.footer.addClass = "uno";
                                var H = e.f.buildOne(i);
                                return e.f.changeClass(H, {
                                    fresh: !0
                                }),
                                    e.f.listen(H, "mouseover", function () {
                                        e.f.changeClass(H, {
                                            fresh: !1
                                        })
                                    }),
                                    e.f.set(H, "data-pin-current", "0"),
                                    H
                            }
                        }
                    },
                    getLegacy: {
                        grid: function (a, b) {
                            var c = parseInt(e.f.getData(a, "scale-height"))
                                , d = parseInt(e.f.getData(a, "scale-width"))
                                , f = parseInt(e.f.getData(a, "board-width"));
                            f > a.parentNode.offsetWidth && (f = ""),
                            c && (b.height = c + 110),
                            d && f && d > 59 && d < 238 && (b.columns = Math.floor(f / d),
                                b.width = f + 20)
                        },
                        buttonPin: function (a, b) {
                            var c = {
                                zero: e.f.getData(a, "zero") || e.v.config.zero,
                                pad: e.f.getData(a, "count-pad"),
                                height: e.f.getData(a, "height"),
                                shape: e.f.getData(a, "shape"),
                                config: e.f.getData(a, "config"),
                                tall: e.f.getData(a, "tall"),
                                round: e.f.getData(a, "round"),
                                countLayout: e.f.get(a, "count-layout")
                            };
                            c.zero && (b.zero = !0),
                                b.count ? (b.padded = !0,
                                    b.zero = !0) : (c.pad && (b.padded = !0),
                                    "beside" === c.config || "horizontal" === c.countLayout ? b.count = "beside" : ("above" === c.config || "vertical" === c.countLayout) && (b.count = "above")),
                            "round" === c.shape && (b.round = !0),
                            ("28" === c.height || "32" === c.height) && (b.tall = !0),
                            c.tall && (b.tall = !0,
                            "false" === c.tall && (b.tall = !1)),
                            c.round && (b.round = !0,
                            "false" === c.round && (b.round = !1))
                        }
                    },
                    seek: {
                        buttonPin: function (a) {
                            var b, c, d, f;
                            if (e.a.noneParam[e.f.getData(a, "do")] === !0)
                                return void e.f.debug('Found a link to pin create form with data-pin-do="none"');
                            if (a.href && (b = e.f.parse(a.href, {
                                url: !0,
                                media: !0,
                                description: !0
                            })),
                                f = e.f.getData(a, "custom"),
                                c = {
                                    "do": e.f.getData(a, "do"),
                                    id: e.f.getData(a, "id"),
                                    url: e.f.getData(a, "url") || b.url || e.d.URL,
                                    media: e.f.getData(a, "media") || b.media,
                                    description: e.f.getData(a, "description") || b.description || e.d.title,
                                    custom: f || e.v.config.custom,
                                    count: e.f.getData(a, "count") || e.v.config.count,
                                    color: e.f.getData(a, "color") || e.v.config.color,
                                    round: e.f.getData(a, "round") || e.v.config.round,
                                    tall: e.f.getData(a, "tall") || e.v.config.tall,
                                    lang: e.f.getData(a, "lang") || e.v.config.lang,
                                    save: e.f.getData(a, "save") || e.v.config.save
                                },
                            e.v.config.custom && (e.v.log.customGlobal = 1),
                            f && (e.v.log.customLocal = 1),
                            "false" === e.v.config.save && (e.v.log.pinit = 1),
                                e.f.checkLang(c),
                                c.media ? c.log = "button_pinit" : c.id ? c.log = "button_pinit_repin" : c.log = "button_pinit_bookmarklet",
                                e.v.countButton = e.v.countButton + 1,
                                c.custom)
                                return a.removeAttribute("href"),
                                    e.f.set(a, "data-pin-log", "button_pinit"),
                                    e.f.set(a, "data-pin-href", e.v.config.pinterest + "/pin/create/button?guid=" + e.v.guid + "-" + e.v.countButton + "&url=" + encodeURIComponent(c.url) + "&media=" + encodeURIComponent(c.media) + "&description=" + encodeURIComponent(c.description)),
                                    e.f.debug('Found a link with data-pin-custom="true"'),
                                    void e.f.debug(a);
                            if (e.f.getLegacy.buttonPin(a, c),
                                d = !1,
                            ("above" === c.count || "beside" === c.count) && (d = !0,
                            c.url && e.f.call(e.a.endpoint.count.replace(/%s/, encodeURIComponent(c.url)), function (b) {
                                e.f.replace(a, e.f.structure.buttonPin(b, c))
                            })),
                                !d) {
                                var g = e.f.structure.buttonPin(a, c);
                                e.f.replace(a, g)
                            }
                        },
                        buttonBookmark: function (a) {
                            return e.f.getData(a, "custom") ? (e.f.set(a, "data-pin-log", "button_pinit_bookmarklet"),
                                e.f.set(a, "data-pin-href", e.v.config.pinterest + "/pin/create/button/"),
                                void a.removeAttribute("href")) : void e.f.seek.buttonPin(a)
                        },
                        buttonFollow: function (a) {
                            var b, c, d, f;
                            if (d = {},
                                c = {
                                    custom: e.f.getData(a, "custom"),
                                    tall: e.f.getData(a, "tall"),
                                    lang: e.f.getData(a, "lang") || e.v.config.lang
                                },
                                e.f.checkLang(c),
                                b = e.f.getPath(a.href),
                                b.length) {
                                if (d.name = a.textContent,
                                    d.id = b[0],
                                b[0] && b[1] && (d.id = b[0] + "/" + b[1]),
                                    c.custom)
                                    return f = d.id.match(/\//) ? e.v.config.pinterest + "/" + d.id + "/follow/?guid=" + e.v.guid : e.v.config.pinterest + "/" + d.id + "/pins/follow/?guid=" + e.v.guid,
                                        e.f.set(a, "data-pin-href", f),
                                        e.f.set(a, "data-pin-log", "button_follow"),
                                        e.w.setTimeout(function () {
                                            a.removeAttribute("href")
                                        }, 1),
                                        void e.f.debug('Found a link with data-pin-custom="true"');
                                e.f.replace(a, e.f.structure.buttonFollow(d, c))
                            }
                        },
                        embedBoard: function (a, b, c) {
                            var d, f, g, h, i;
                            f = e.f.getPath(b),
                            "" === f[f.length - 1] && f.pop(),
                            c && f.pop(),
                            f.length > 1 && (h = {
                                columns: e.f.getData(a, "columns") || e.v.config.grid.columns,
                                height: e.f.getData(a, "height") - 0 || e.v.config.grid.height,
                                width: e.f.getData(a, "width") || null,
                                noscroll: e.f.getData(a, "noscroll") || null,
                                lang: e.f.getData(a, "lang") || e.v.config.lang
                            },
                            2 === f.length && (g = f[0] + "/" + f[1],
                                d = "board"),
                            3 === f.length && f[2] && (g = f[0] + "/" + f[1] + "/" + f[2],
                                d = "section"),
                            c && (d = "board"),
                                e.f.checkLang(h),
                                e.f.getLegacy.grid(a, h),
                                i = "",
                            "https:" === e.w.location.protocol && (i = "&base_scheme=https"),
                                e.f.call(e.a.endpoint[d].replace(/%s/, g) + "?sub=" + e.v.sub + i, function (c) {
                                    "success" === c.status && ("board" === d && e.f.replace(a, e.f.structure.embedGrid(c, h)),
                                    "section" === d && (c.data.pins.length ? e.f.replace(a, e.f.structure.embedGrid(c, h)) : e.f.seek.embedBoard(a, b, !0))),
                                    "failure" === c.status && "section" === d && e.f.seek.embedBoard(a, b, !0)
                                }))
                        },
                        embedUser: function (a, b) {
                            var c, d, f;
                            c = e.f.getPath(b),
                            c.length && (d = {
                                columns: e.f.getData(a, "columns") || e.v.config.grid.columns,
                                height: e.f.getData(a, "height") - 0 || e.v.config.grid.height,
                                width: e.f.getData(a, "width") || null,
                                noscroll: e.f.getData(a, "noscroll") || null,
                                lang: e.f.getData(a, "lang") || e.v.config.lang
                            },
                                e.f.checkLang(d),
                                e.f.getLegacy.grid(a, d),
                                f = "",
                            "https:" === e.w.location.protocol && (f = "&base_scheme=https"),
                                e.f.call(e.a.endpoint.user.replace(/%s/, c[0]) + "?sub=" + e.v.sub + f, function (b) {
                                    e.f.replace(a, e.f.structure.embedGrid(b, d))
                                }))
                        },
                        embedPin: function (a) {
                            var b, c, d;
                            b = e.f.getPath(a.href),
                            b.length && (c = {
                                width: e.f.getData(a, "width") || null,
                                terse: e.f.getData(a, "terse") || null,
                                lang: e.f.getData(a, "lang") || e.v.config.lang
                            },
                                d = "",
                            "https:" === e.w.location.protocol && (d = "&base_scheme=https"),
                                e.f.call(e.a.endpoint.pin.replace(/%s/, b[1]) + "&sub=" + e.v.sub + d, function (b) {
                                    e.f.replace(a, e.f.structure.embedPin(b, c))
                                }))
                        }
                    },
                    getPath: function (a) {
                        var b = a.split("#")[0].split("?")[0].split("/");
                        return b.length > 2 ? (b.shift(),
                            b.shift(),
                            b.shift()) : b = [],
                            b
                    },
                    build: function (a) {
                        var b, c, d, f, g, h;
                        for (a || (a = e.d),
                                 b = a.getElementsByTagName("A"),
                                 c = [],
                                 d = 0; d < b.length; d += 1)
                            b[d].href && c.push(b[d]);
                        for (d = 0,
                                 f = c.length; d < f; d += 1)
                            if (g = c[d].href,
                            g && g.match(e.a.myDomain)) {
                                if (h = e.f.getData(c[d], "do"),
                                "function" === typeof e.f.seek[h]) {
                                    try {
                                        g = decodeURIComponent(decodeURIComponent(g))
                                    } catch (i) {
                                    }
                                    e.f.seek[h](c[d], g);
                                    continue
                                }
                                if (g.match(/\/pin\/create\/button\//)) {
                                    e.f.seek.buttonPin(c[d]);
                                    continue
                                }
                                if (e.f.getData(c[d], "custom")) {
                                    e.f.seek.buttonPin(c[d]);
                                    continue
                                }
                            }
                    },
                    exposeUtil: function () {
                        var a = e.w[e.v.config.util] = e.f.util;
                        e.v.config.build ? (e.f.debug("exposing $.f.build as " + e.v.config.build),
                            a.build = e.w[e.v.config.build]) : (e.f.debug("exposing $.f.build at " + e.v.config.util + ".build"),
                            a.build = e.f.build)
                    },
                    checkLang: function (a) {
                        e.a.strings[a.lang] || (a.lang = e.v.config.lang)
                    },
                    config: function () {
                        var a, b, c, d = e.d.getElementsByTagName("SCRIPT");
                        for (a = d.length - 1; a > -1; a -= 1)
                            if (e.a.me && d[a] && d[a].src && d[a].src.match(e.a.me)) {
                                for (b = 0; b < e.a.configParam.length; b += 1)
                                    c = e.f.getData(d[a], e.a.configParam[b]),
                                    c && (e.v.config[e.a.configParam[b]] = c);
                                e.v.config.here && (e.v.here = e.v.config.here),
                                    e.f.kill(d[a])
                            }
                        e.v.config.lang ? e.a.strings[e.v.config.lang] || (e.f.debug(e.v.config.lang + " not found in valid languages, changing back to " + e.v.lang),
                            e.v.config.lang = e.v.lang) : e.v.config.lang = e.v.lang,
                        "string" === typeof e.v.config.build && (e.w[e.v.config.build] = function (a) {
                                e.f.build(a)
                            }
                        ),
                        e.v.config.tag && (e.v.config.tag = e.v.config.tag.replace(/[^a-zA-Z0-9_]/g, "").substr(0, 32)),
                            e.v.config.pinterest = "https://" + e.v.sub + ".pinterest.com",
                            e.w.setTimeout(function () {
                                var a = "&event=init&sub=" + e.v.sub + "&button_count=" + e.v.countButton + "&follow_count=" + e.v.countFollow + "&pin_count=" + e.v.countPin;
                                e.v.canHazHoverButtons && (a += "&button_hover=1"),
                                e.v.canHazStickyButtons && (a += "&button_sticky=1"),
                                e.v.countPinMedium && (a = a + "&pin_count_medium=" + e.v.countPinMedium),
                                e.v.countPinLarge && (a = a + "&pin_count_large=" + e.v.countPinLarge),
                                e.v.log.customGlobal && (a += "&custom_global=1"),
                                e.v.log.customLocal && (a += "&custom_local=1"),
                                e.v.log.pinit && (a += "&pinit_flag=1"),
                                    a = a + "&profile_count=" + e.v.countProfile + "&board_count=" + e.v.countBoard + "&section_count=" + e.v.countSection,
                                "number" !== typeof e.w["PIN_" + ~~((new Date).getTime() / 864e5)] && (a += "&xload=1"),
                                    a = a + "&lang=" + e.v.config.lang,
                                e.n.language && (a = a + "&nvl=" + e.n.language),
                                    e.f.log(a)
                            }, 1e3)
                    },
                    langLocLookup: function () {
                        var a, b, c, d, f, g;
                        if (e.v.lang = "en",
                            e.v.sub = "www",
                            a = e.n.language || e.v.lang,
                            e.f.debug("Looking up language and domain for " + a),
                            a = a.toLowerCase(),
                            a = a.replace(/[^a-z0-9]/g, " "),
                            a = a.replace(/^\s+|\s+$/g, ""),
                            a = a.replace(/\s+/g, " "),
                            a = a.split(" "),
                        a.length > 2)
                            for (b = a.length - 1; b > -1; b -= 1)
                                2 !== a[b].length && a.splice(b, 1);
                        return a[0] && (c = a[0],
                        e.a.strings[c] && (e.v.lang = c),
                        e.a.save.domain[c] && ("string" === typeof e.a.save.domain[c] ? e.v.sub = e.a.save.domain[c] : e.v.sub = c),
                        a[1] && (d = a[1],
                        d !== c && (f = !1,
                            g = e.a.save.lookup[c],
                        g && (g === !0 ? e.a.save.domain[d] || (e.v.sub = "www") : g.d === d ? e.v.sub = g.d : g.alt && g.alt[d] && ("string" === typeof g.alt[d] ? e.v.sub = g.alt[d] : (g.alt[d].d && (e.v.sub = g.alt[d].d,
                            hazAltDom = !0),
                        g.alt[d].s && (e.v.lang = g.alt[d].s)))),
                        f || e.a.save.domain[d] && (e.v.sub = d)))),
                            e.f.debug("Lang: " + e.v.lang),
                            e.f.debug("Subdomain: " + e.v.sub),
                            {
                                s: e.v.lang,
                                d: e.v.sub
                            }
                    },
                    canHazButton: function (a) {
                        var b, c = !1;
                        return a && a.tagName && "IMG" === a.tagName && (b = e.f.getData(a, "media") || a.src,
                        b && b.match(/^https?:\/\//) && (e.f.getData(a, "no-hover") || e.f.getData(a, "nohover") || e.f.getData(a, "nopin") || e.f.get(a, "data-nopin") || (c = !0))),
                            c
                    },
                    sticky: {
                        find: function (a) {
                            var b, c;
                            return c = {},
                                b = e.d.elementFromPoint(a.x, a.y),
                            e.f.canHazButton(b) && (c = {
                                rect: b.getBoundingClientRect(),
                                img: b
                            }),
                                c
                        },
                        hide: function () {
                            e.f.kill(e.s.hoverButton)
                        },
                        show: function (a) {
                            a && a.img && e.f.showHoverButton(a.img, !0)
                        },
                        fire: function () {
                            var a, b, c, d, f, g, h = {}, i = [], j = e.w.innerWidth;
                            if (!e.v.sticky.hazTouch) {
                                for (b = 0; b < e.w.innerWidth; b += e.w.innerWidth / 10)
                                    c = e.f.sticky.find({
                                        x: b,
                                        y: e.w.innerHeight / e.a.sticky.scanAt
                                    }),
                                    c.rect && c.img && !h[c.img.src] && (h[c.img.src] = !0,
                                        i.push({
                                            img: c.img,
                                            rect: c.rect
                                        }));
                                for (a = 0; a < i.length; a += 1)
                                    g = i[a].rect.x + i[a].rect.width / 2,
                                        d = Math.abs(e.v.sticky.touchX - g),
                                    d < j && (j = d,
                                        f = i[a]);
                                e.f.sticky.show(f)
                            }
                        },
                        observe: function () {
                            e.v.sticky.hazChange ? e.w.pageYOffset === e.v.sticky.pageY ? (e.f.sticky.fire(),
                                e.v.sticky.hazChange = !1) : e.v.sticky.pageY = e.w.pageYOffset : e.w.pageYOffset !== e.v.sticky.pageY && (e.f.sticky.hide(),
                                e.v.sticky.pageY = e.w.pageYOffset,
                                e.v.sticky.hazChange = !0),
                                e.w.setTimeout(e.f.sticky.observe, e.a.sticky.obsDelay)
                        },
                        init: function () {
                            e.v.sticky = e.a.sticky,
                                e.f.listen(e.w, "touchstart", function (a) {
                                    e.v.sticky.touchX = ~~a.touches[0].clientX,
                                        e.v.sticky.hazTouch = !0
                                }),
                                e.f.listen(e.w, "touchend", function (a) {
                                    e.v.sticky.hazTouch = !1
                                }),
                            e.v.sticky.runOnLoad && (e.v.sticky.hazChange = !0,
                                e.v.sticky.pageY = e.w.pageYOffset,
                                e.v.sticky.touchX = e.w.innerWidth / 2),
                                e.f.sticky.observe(),
                                e.v.canHazStickyButtons = !0,
                            e.v.canHazHoverButtons || (e.v.countButton = e.v.countButton + 1)
                        }
                    },
                    init: function () {
                        var a, b, c = "com", d = !1;
                        for (e.d.b = e.d.getElementsByTagName("BODY")[0],
                                 e.d.h = e.d.getElementsByTagName("HEAD")[0],
                                 e.v = {
                                     fonts: {},
                                     guid: "",
                                     css: "",
                                     config: {
                                         debug: !1,
                                         util: "PinUtils",
                                         grid: {
                                             height: 400,
                                             columns: 3
                                         }
                                     },
                                     userAgent: e.w.navigator.userAgent,
                                     lang: "en",
                                     urls: e.a.urls,
                                     here: e.d.URL.split("#")[0],
                                     countButton: 0,
                                     countFollow: 0,
                                     countPin: 0,
                                     countPinMedium: 0,
                                     countPinLarge: 0,
                                     countBoard: 0,
                                     countSection: 0,
                                     countProfile: 0,
                                     log: {
                                         customGlobal: 0,
                                         customLocal: 0,
                                         save: 0
                                     }
                                 },
                                 e.f.langLocLookup(),
                                 a = 0; a < 12; a += 1)
                            e.v.guid = e.v.guid + "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz".substr(Math.floor(60 * Math.random()), 1);
                        null !== e.v.userAgent.match(/MSIE/) && (e.v.hazIE = !0,
                        e.v.userAgent.match(/MSIE [5-8]/) && (d = !0,
                            e.f.log("&event=oldie_error&ua=" + encodeURIComponent(e.v.userAgent)))),
                        d || (e.f.config(),
                            e.f.presentation(e.a.styles),
                            e.f.build(),
                            e.f.listen(e.d.b, "click", e.f.click),
                            b = e.v.here.split("/"),
                        b[2] && (c = b[2].split(".").pop()),
                        "object" === typeof e.w.ontouchstart && (e.v.hazMobile = !0),
                        (e.v.config.hover || e.a.override.hover.domain[c] || e.a.override.hover.lang[e.v.lang]) && (e.a.override.hover.domain[c] && e.f.debug("hover: overridden by TLD"),
                        e.a.override.hover.lang[e.v.lang] && e.f.debug("hover: overridden by browser language"),
                            "false" !== e.v.config.hover ? (e.f.debug("hover: allowed per config"),
                                e.v.canHazHoverButtons = !0,
                                e.v.countButton = e.v.countButton + 1,
                                e.d.b.setAttribute("data-pin-hover", !0),
                                e.f.listen(e.d.b, "mouseover", e.f.over),
                                "false" !== e.v.config.sticky ? (e.f.debug("sticky: allowed per config"),
                                    e.v.hazMobile ? (e.f.debug("sticky: initing"),
                                        e.f.sticky.init()) : e.f.debug("sticky: ontouchstart not found")) : e.f.debug("sticky: forbidden by config")) : e.f.debug("hover: forbidden by config")),
                            e.f.exposeUtil())
                    }
                }
            }()
        };
        e.f.init()
    }(window, document, navigator, {
        k: "PIN_" + (new Date).getTime(),
        tv: "2020072702",
        me: /pinit\.js$/,
        myDomain: /^https?:\/\/(([a-z]{1,3})\.)?pinterest\.([a-z]{0,2}\.)?([a-z]{1,3})/,
        noneParam: {
            ignore: !0,
            none: !0,
            nothing: !0
        },
        override: {
            hover: {
                domain: {},
                lang: {}
            }
        },
        configParam: ["sticky", "save", "hover", "color", "lang", "custom", "tall", "round", "count", "zero", "terse", "debug", "tag", "build", "error", "util", "height", "shape", "here"],
        sticky: {
            pageY: 0,
            hazChange: !1,
            hazTouch: !1,
            runOnLoad: !0,
            obsDelay: 100,
            scanAt: 3
        },
        hoverButtonMinImgSize: 119,
        hoverButtonOffsetTop: 10,
        hoverButtonOffsetLeft: 10,
        dataAttributePrefix: "data-pin-",
        endpoint: {
            pinterest: "https://web.archive.org/web/20200813193237/https://www.pinterest.com",
            bookmark: "https://web.archive.org/web/20200813193237/https://assets.pinterest.com/js/pinmarklet.js",
            count: "https://web.archive.org/web/20200813193237/https://widgets.pinterest.com/v1/urls/count.json?url=%s",
            pin: "https://web.archive.org/web/20200813193237/https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=%s",
            board: "https://web.archive.org/web/20200813193237/https://widgets.pinterest.com/v3/pidgets/boards/%s/pins/",
            section: "https://web.archive.org/web/20200813193237/https://widgets.pinterest.com/v3/pidgets/sections/%s/pins/",
            user: "https://web.archive.org/web/20200813193237/https://widgets.pinterest.com/v3/pidgets/users/%s/pins/",
            log: "https://web.archive.org/web/20200813193237/https://log.pinterest.com/"
        },
        path: {
            repin: "/pin/%s/repin/x/",
            create: "/pin/create/button/?"
        },
        pop: {
            base: "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,%dim%,left=0,top=0",
            size: "width=800,height=900"
        },
        build: {
            setStyle: {
                display: !0,
                top: !0,
                left: !0,
                backgroundImage: !0,
                backgroundColor: !0,
                height: !0,
                width: !0,
                paddingBottom: !0,
                fontFamily: !0,
                textAlign: !0,
                color: !0,
                fontSize: !0,
                display: !0
            },
            setData: {
                href: !0,
                id: !0,
                log: !0,
                x: !0
            }
        },
        util: {
            embed_story_play: "control",
            embed_story_pause: "control",
            embed_story_noop: "noop",
            embed_story_forward: "navigate",
            embed_story_back: "navigate",
            embed_pin_repin: "repin",
            embed_pin_repin_small: "repin",
            embed_pin_repin_medium: "repin",
            embed_pin_repin_large: "repin",
            button_pinit: "pinOne",
            button_pinit_floating: "pinOne",
            button_pinit_sticky: "pinOne",
            button_pinit_bookmarklet: "pinAny",
            button_follow: "follow",
            embed_board_ft: "follow",
            embed_user_ft: "follow",
            embed_section_ft: "follow",
            repin: "repin",
            button_pinit_repin: "repin",
            button_pinit_floating_repin: "repinHoverButton",
            button_pinit_sticky_repin: "repinHoverButton",
            embed_pin: "open"
        },
        save: {
            domain: {
                www: !0,
                uk: !0,
                br: !0,
                ja: "jp",
                jp: !0,
                ko: "kr",
                kr: !0,
                fr: !0,
                es: !0,
                pl: !0,
                de: !0,
                ru: !0,
                it: !0,
                au: !0,
                nl: !0,
                tr: !0,
                id: !0,
                hu: !0,
                pt: !0,
                se: !0,
                cz: !0,
                gr: !0,
                ro: !0,
                dk: !0,
                sk: !0,
                fi: !0,
                "in": !0,
                no: !0,
                za: !0,
                nz: !0
            },
            lookup: {
                cs: {
                    d: "cz"
                },
                da: {
                    d: "dk"
                },
                de: {
                    alt: {
                        at: "de"
                    }
                },
                el: {
                    d: "gr",
                    alt: {
                        cy: "gr"
                    }
                },
                en: {
                    alt: {
                        au: "au",
                        gb: "uk",
                        ie: "uk",
                        "in": "in",
                        nz: "nz",
                        uk: "uk",
                        za: "za"
                    }
                },
                es: {
                    alt: {
                        419: "www",
                        ar: "www",
                        cl: "www",
                        co: "www",
                        la: "www",
                        mx: "www",
                        pe: "www",
                        us: "www",
                        uy: "www",
                        ve: "www",
                        xl: "www"
                    }
                },
                fi: !0,
                fr: {
                    alt: {
                        be: "fr",
                        ca: "www"
                    }
                },
                hi: {
                    d: "in"
                },
                hu: !0,
                id: !0,
                it: !0,
                ja: {
                    d: "jp"
                },
                ko: {
                    d: "kr"
                },
                ms: {
                    d: "www"
                },
                nl: {
                    alt: {
                        be: "nl"
                    }
                },
                nb: {
                    d: "no"
                },
                pl: !0,
                pt: {
                    alt: {
                        br: {
                            d: "br",
                            s: "pt-br"
                        }
                    }
                },
                ro: !0,
                ru: !0,
                sk: !0,
                sv: {
                    d: "se"
                },
                tl: {
                    d: "www"
                },
                th: {
                    d: "www"
                },
                tr: {
                    alt: {
                        cy: "tr"
                    }
                },
                uk: !0,
                vi: !0
            }
        },
        strings: {
            en: {
                followOn: "Follow On %s",
                by: "by %s",
                save: "Save",
                publishedBy: "Published by"
            },
            cs: {
                followOn: "Sledovat na %s",
                by: "od %s",
                save: "Uložit",
                publishedBy: "Publikoval/a"
            },
            da: {
                followOn: "Følg på %s",
                by: "fra %s",
                save: "Gem",
                publishedBy: "Offentliggjort af"
            },
            de: {
                followOn: "Auf %s folgen",
                by: "von %s",
                save: "Merken",
                publishedBy: "Veröffentlicht von"
            },
            el: {
                followOn: "Ακολουθήστε στο %s",
                by: "από %s",
                save: "Αποθήκευση",
                publishedBy: "Δημοσιεύτηκε από"
            },
            es: {
                followOn: "Seguir en %s",
                by: "por %s",
                save: "Guardar",
                publishedBy: "Publicado por"
            },
            "es-es": {
                followOn: "Seguir en %s",
                by: "de %s",
                save: "Guardar",
                publishedBy: "Publicado por"
            },
            fi: {
                followOn: "Seuraa täällä: %s",
                by: "%s",
                save: "Tallenna",
                publishedBy: "Julkaisija:"
            },
            fr: {
                followOn: "Suivre sur %s",
                by: "par %s",
                save: "Enregistrer",
                publishedBy: "Publiée par"
            },
            hi: {
                followOn: "%s पर फ़ॉलो करें",
                by: "%s की ओर से",
                save: "सेव करें",
                publishedBy: "प्रकाशक:"
            },
            hu: {
                followOn: "Kövesd itt: %s",
                by: "tőle: %s",
                save: "Mentés",
                publishedBy: "Közzétette:"
            },
            id: {
                followOn: "Ikuti di %s",
                by: "oleh %s",
                save: "Simpan",
                publishedBy: "Diterbitkan oleh"
            },
            it: {
                followOn: "Segui su %s",
                by: "di %s",
                save: "Salva",
                publishedBy: "Pubblicato da"
            },
            ja: {
                followOn: "%s でフォロー",
                by: "撮影者：%s",
                save: "保存",
                publishedBy: "投稿者："
            },
            ko: {
                followOn: "%s 에서 팔로우",
                by: "%s 이(가) 핀함",
                save: "저장",
                publishedBy: "게시자:"
            },
            ms: {
                followOn: "Ikuti Di %s",
                by: "oleh %s",
                save: "Simpan",
                publishedBy: "Diterbitkan oleh"
            },
            nb: {
                followOn: "Følg dette på %s",
                by: "av %s",
                save: "Lagre",
                publishedBy: "Publisert av"
            },
            nl: {
                followOn: "Volgen op %s",
                by: "van %s",
                save: "Bewaren",
                publishedBy: "Gepubliceerd door"
            },
            pl: {
                followOn: "Obserwuj na %s",
                by: "autor: %s",
                save: "Zapisz",
                publishedBy: "Opublikowane przez:"
            },
            pt: {
                followOn: "Segue no %s",
                by: "por %s",
                save: "Guardar",
                publishedBy: "Publicado por"
            },
            "pt-br": {
                followOn: "Siga no %s",
                by: "de %s",
                save: "Salvar",
                publishedBy: "Publicado por"
            },
            ro: {
                followOn: "Urmărește pe %s",
                by: "de %s",
                save: "Salvează",
                publishedBy: "Publicat de"
            },
            ru: {
                followOn: "Подписаться в %s",
                by: "пользователем %s",
                save: "Сохранить",
                publishedBy: "Автор:"
            },
            sk: {
                followOn: "Sledujte na %s",
                by: "Autor: %s",
                save: "Uložiť",
                publishedBy: "Zverejnil:"
            },
            sv: {
                followOn: "Följ på %s",
                by: "av %s",
                save: "Spara",
                publishedBy: "Publicerad av"
            },
            tl: {
                followOn: "I-follow Sa %s",
                by: "ni %s",
                save: "I-save",
                publishedBy: "Na-published ni"
            },
            th: {
                followOn: "ติดตามใน %s",
                by: "โดย %s",
                save: "บันทึก",
                publishedBy: "เผยแพร่โดย"
            },
            tr: {
                followOn: "%s üzerinde takip et",
                by: "%s tarafından",
                save: "Kaydet",
                publishedBy: "Yayınlayan"
            },
            uk: {
                followOn: "Підписатися в %s",
                by: "користувачем %s",
                save: "Зберегти",
                publishedBy: "Автор:"
            },
            vi: {
                followOn: "Theo dõi trên %s",
                by: "Tác giả: %s",
                save: "Lưu",
                publishedBy: "Phát hành bởi:"
            }
        },
        svg: {
            pause: {
                w: "24",
                h: "24",
                p: [{
                    f: "fff",
                    d: "M7 0c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3s-3-1.35-3-3V3c0-1.65 1.35-3 3-3zm10 0c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3s-3-1.35-3-3V3c0-1.65 1.35-3 3-3z"
                }]
            },
            play: {
                w: "24",
                h: "24",
                p: [{
                    f: "fff",
                    d: "M22.62 9.48L8.63.48A3 3 0 0 0 4 3v18a3 3 0 0 0 4.63 2.52l14-9a3 3 0 0 0 0-5.04"
                }]
            },
            forward: {
                w: "24",
                h: "24",
                p: [{
                    f: "fff",
                    s: "aaa",
                    w: ".5",
                    d: "M6.72 24c.57 0 1.14-.22 1.57-.66L19.5 12 8.29.66c-.86-.88-2.27-.88-3.14 0-.87.88-.87 2.3 0 3.18L13.21 12l-8.06 8.16c-.87.88-.87 2.3 0 3.18.43.44 1 .66 1.57.66"
                }]
            },
            backward: {
                w: "24",
                h: "24",
                p: [{
                    f: "fff",
                    s: "aaa",
                    w: ".5",
                    d: "M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66"
                }]
            },
            above: {
                w: "114",
                h: "76",
                p: [{
                    s: "b5b5b5",
                    f: "fff",
                    d: "M9 1C4.6 1 1 4.6 1 9v43c0 4.3 3.6 8 8 8h26l18 15h7.5l16-15H105c4.4 0 8-3.7 8-8V9c0-4.4-3.6-8-8-8H9z"
                }]
            },
            beside: {
                w: "126",
                h: "56",
                x1: "2",
                y1: "0",
                x2: "130",
                y2: "60",
                p: [{
                    s: "b5b5b5",
                    f: "fff",
                    d: "M119.6 2c4.5 0 8 3.6 8 8v40c0 4.4-3.5 8-8 8H23.3L1.6 32.4v-4.6L23.3 2h96.3z"
                }]
            },
            logo: {
                w: "30",
                h: "30",
                x1: "-1",
                y1: "-1",
                x2: "31",
                y2: "31",
                p: [{
                    f: "fff",
                    d: "M29.449,14.662 C29.449,22.722 22.868,29.256 14.75,29.256 C6.632,29.256 0.051,22.722 0.051,14.662 C0.051,6.601 6.632,0.067 14.75,0.067 C22.868,0.067 29.449,6.601 29.449,14.662"
                }, {
                    f: "111",
                    d: "M14.733,1.686 C7.516,1.686 1.665,7.495 1.665,14.662 C1.665,20.159 5.109,24.854 9.97,26.744 C9.856,25.718 9.753,24.143 10.016,23.022 C10.253,22.01 11.548,16.572 11.548,16.572 C11.548,16.572 11.157,15.795 11.157,14.646 C11.157,12.842 12.211,11.495 13.522,11.495 C14.637,11.495 15.175,12.326 15.175,13.323 C15.175,14.436 14.462,16.1 14.093,17.643 C13.785,18.935 14.745,19.988 16.028,19.988 C18.351,19.988 20.136,17.556 20.136,14.046 C20.136,10.939 17.888,8.767 14.678,8.767 C10.959,8.767 8.777,11.536 8.777,14.398 C8.777,15.513 9.21,16.709 9.749,17.359 C9.856,17.488 9.872,17.6 9.84,17.731 C9.741,18.141 9.52,19.023 9.477,19.203 C9.42,19.44 9.288,19.491 9.04,19.376 C7.408,18.622 6.387,16.252 6.387,14.349 C6.387,10.256 9.383,6.497 15.022,6.497 C19.555,6.497 23.078,9.705 23.078,13.991 C23.078,18.463 20.239,22.062 16.297,22.062 C14.973,22.062 13.728,21.379 13.302,20.572 C13.302,20.572 12.647,23.05 12.488,23.657 C12.193,24.784 11.396,26.196 10.863,27.058 C12.086,27.434 13.386,27.637 14.733,27.637 C21.95,27.637 27.801,21.828 27.801,14.662 C27.801,7.495 21.95,1.686 14.733,1.686"
                }]
            },
            lockup: {
                w: "50",
                h: "12",
                x1: "0",
                y1: "0",
                x2: "50",
                y2: "12",
                p: [{
                    f: "111",
                    d: "M19.69,9.28 L19.69,4.28 L21.27,4.28 L21.27,9.28 L19.69,9.28 Z M5.97,0.00 C9.27,0.00 11.95,2.69 11.95,6.00 C11.95,9.31 9.27,12.00 5.97,12.00 C5.38,12.00 4.80,11.91 4.26,11.75 C4.26,11.75 4.26,11.75 4.26,11.75 C4.25,11.75 4.24,11.74 4.23,11.74 L4.21,11.73 C4.21,11.73 4.21,11.73 4.21,11.73 C4.45,11.33 4.81,10.68 4.95,10.16 C5.02,9.88 5.32,8.73 5.32,8.73 C5.52,9.11 6.08,9.42 6.69,9.42 C8.49,9.42 9.79,7.76 9.79,5.69 C9.79,3.71 8.18,2.23 6.11,2.23 C3.53,2.23 2.16,3.96 2.16,5.86 C2.16,6.74 2.63,7.83 3.37,8.18 C3.49,8.23 3.55,8.21 3.57,8.10 C3.59,8.02 3.69,7.61 3.74,7.42 C3.75,7.36 3.75,7.31 3.70,7.25 C3.45,6.95 3.25,6.39 3.25,5.88 C3.25,4.55 4.25,3.27 5.95,3.27 C7.42,3.27 8.45,4.28 8.45,5.71 C8.45,7.34 7.63,8.46 6.57,8.46 C5.98,8.46 5.54,7.98 5.68,7.38 C5.85,6.67 6.18,5.90 6.18,5.38 C6.18,4.92 5.93,4.54 5.42,4.54 C4.82,4.54 4.34,5.16 4.34,5.99 C4.34,6.52 4.52,6.88 4.52,6.88 C4.52,6.88 3.93,9.40 3.82,9.87 C3.70,10.38 3.75,11.11 3.80,11.59 L3.80,11.59 C3.79,11.59 3.78,11.58 3.78,11.58 C3.77,11.58 3.76,11.58 3.76,11.57 C3.76,11.57 3.76,11.57 3.76,11.57 C1.56,10.69 0.00,8.53 0.00,6.00 C0.00,2.69 2.67,0.00 5.97,0.00 Z M16.87,2.31 C17.71,2.31 18.34,2.54 18.76,2.95 C19.21,3.37 19.46,3.96 19.46,4.66 C19.46,6.00 18.54,6.95 17.11,6.95 L15.72,6.95 L15.72,9.28 L14.12,9.28 L14.12,2.31 L16.87,2.31 Z M16.94,5.58 C17.56,5.58 17.91,5.21 17.91,4.65 C17.91,4.10 17.55,3.76 16.94,3.76 L15.72,3.76 L15.72,5.58 L16.94,5.58 Z M50.00,5.28 L49.19,5.28 L49.19,7.62 C49.19,8.01 49.40,8.11 49.74,8.11 C49.83,8.11 49.93,8.10 50.00,8.10 L50.00,9.28 C49.84,9.31 49.58,9.33 49.22,9.33 C48.30,9.33 47.64,9.03 47.64,7.96 L47.64,5.28 L47.16,5.28 L47.16,4.28 L47.64,4.28 L47.64,2.70 L49.19,2.70 L49.19,4.28 L50.00,4.28 L50.00,5.28 Z M45.31,6.13 C46.18,6.27 47.21,6.50 47.21,7.77 C47.21,8.87 46.25,9.43 44.95,9.43 C43.55,9.43 42.65,8.81 42.54,7.78 L44.05,7.78 C44.15,8.20 44.46,8.40 44.94,8.40 C45.42,8.40 45.72,8.22 45.72,7.90 C45.72,7.45 45.12,7.40 44.46,7.29 C43.59,7.14 42.67,6.91 42.67,5.74 C42.67,4.68 43.64,4.14 44.82,4.14 C46.22,4.14 46.98,4.75 47.06,5.74 L45.60,5.74 C45.54,5.29 45.24,5.15 44.80,5.15 C44.42,5.15 44.12,5.30 44.12,5.61 C44.12,5.96 44.68,6.01 45.31,6.13 Z M20.48,2.00 C21.00,2.00 21.43,2.42 21.43,2.95 C21.43,3.48 21.00,3.90 20.48,3.90 C19.95,3.90 19.53,3.48 19.53,2.95 C19.53,2.42 19.95,2.00 20.48,2.00 Z M28.48,7.62 C28.48,8.01 28.70,8.11 29.04,8.11 C29.10,8.11 29.18,8.10 29.24,8.10 L29.24,9.29 C29.08,9.31 28.83,9.33 28.52,9.33 C27.60,9.33 26.94,9.03 26.94,7.96 L26.94,5.28 L26.42,5.28 L26.42,4.28 L26.94,4.28 L26.94,2.70 L28.48,2.70 L28.48,4.28 L29.24,4.28 L29.24,5.28 L28.48,5.28 L28.48,7.62 Z M24.69,4.14 C25.77,4.14 26.41,4.92 26.41,6.03 L26.41,9.28 L24.83,9.28 L24.83,6.35 C24.83,5.82 24.57,5.46 24.05,5.46 C23.53,5.46 23.18,5.90 23.18,6.52 L23.18,9.28 L21.60,9.28 L21.60,4.28 L23.12,4.28 L23.12,4.97 L23.15,4.97 C23.52,4.43 24.00,4.14 24.69,4.14 Z M33.42,4.76 C32.99,4.37 32.43,4.14 31.72,4.14 C30.20,4.14 29.16,5.28 29.16,6.77 C29.16,8.28 30.17,9.42 31.81,9.42 C32.44,9.42 32.95,9.26 33.37,8.96 C33.80,8.66 34.10,8.23 34.20,7.78 L32.66,7.78 C32.52,8.10 32.25,8.28 31.83,8.28 C31.18,8.28 30.81,7.86 30.72,7.19 L34.29,7.19 C34.30,6.18 34.01,5.31 33.42,4.76 L33.42,4.76 Z M41.66,4.76 C42.26,5.31 42.55,6.18 42.54,7.19 L38.97,7.19 C39.06,7.86 39.43,8.28 40.08,8.28 C40.50,8.28 40.77,8.10 40.91,7.78 L42.45,7.78 C42.34,8.23 42.05,8.66 41.62,8.96 C41.20,9.26 40.69,9.42 40.06,9.42 C38.42,9.42 37.41,8.28 37.41,6.77 C37.41,5.28 38.45,4.14 39.97,4.14 C40.67,4.14 41.24,4.37 41.66,4.76 Z M30.73,6.24 C30.83,5.65 31.14,5.27 31.75,5.27 C32.26,5.27 32.63,5.65 32.69,6.24 L30.73,6.24 Z M38.98,6.24 L40.94,6.24 C40.88,5.65 40.51,5.27 40.00,5.27 C39.39,5.27 39.08,5.65 38.98,6.24 Z M37.54,4.21 L37.54,5.60 C36.64,5.51 36.07,5.99 36.07,7.03 L36.07,9.28 L34.48,9.28 L34.48,4.28 L36.00,4.28 L36.00,5.06 L36.03,5.06 C36.38,4.47 36.78,4.21 37.39,4.21 C37.45,4.21 37.50,4.21 37.54,4.21 Z"
                }]
            },
            pinit_en: {
                w: "42",
                h: "18",
                p: [{
                    f: "e60023",
                    d: "M16.853,6.345 C17.632,6.345 18.38,5.702 18.51,4.909 C18.664,4.138 18.135,3.494 17.357,3.494 C16.578,3.494 15.83,4.138 15.698,4.909 C15.546,5.702 16.053,6.345 16.853,6.345 Z M7.458,0 C2.5,0 0,3.522 0,6.459 C0,8.237 0.68,9.819 2.137,10.409 C2.376,10.505 2.59,10.412 2.66,10.15 C2.708,9.969 2.822,9.511 2.873,9.32 C2.943,9.061 2.916,8.97 2.723,8.744 C2.302,8.253 2.034,7.617 2.034,6.716 C2.034,4.104 4.007,1.765 7.172,1.765 C9.975,1.765 11.514,3.461 11.514,5.726 C11.514,8.708 10.183,11.18 8.206,11.18 C7.114,11.18 6.297,10.329 6.559,9.233 C6.872,7.922 7.48,6.509 7.48,5.564 C7.48,4.717 7.022,4.011 6.072,4.011 C4.956,4.011 4.06,5.155 4.06,6.687 C4.06,7.663 4.393,8.323 4.393,8.323 C4.393,8.323 3.251,13.117 3.051,13.957 C2.652,15.629 2.991,17.679 3.019,17.886 C3.036,18.009 3.195,18.038 3.267,17.946 C3.37,17.812 4.7,16.187 5.151,14.562 C5.279,14.102 5.885,11.72 5.885,11.72 C6.248,12.406 7.308,13.009 8.435,13.009 C11.79,13.009 14.066,9.979 14.066,5.923 C14.066,2.857 11.444,0 7.458,0 Z M26.896,14.189 C26.348,14.189 26.117,13.915 26.117,13.328 C26.117,12.404 27.035,10.091 27.035,9.041 C27.035,7.638 26.276,6.826 24.72,6.826 C23.739,6.826 22.722,7.453 22.291,8.003 C22.291,8.003 22.422,7.553 22.467,7.38 C22.515,7.196 22.415,6.884 22.173,6.884 L20.651,6.884 C20.328,6.884 20.238,7.055 20.191,7.244 C20.172,7.32 19.624,9.584 19.098,11.632 C18.738,13.034 17.863,14.205 16.928,14.205 C16.447,14.205 16.233,13.906 16.233,13.399 C16.233,12.959 16.519,11.877 16.86,10.534 C17.276,8.898 17.642,7.551 17.681,7.394 C17.732,7.192 17.642,7.017 17.379,7.017 L15.849,7.017 C15.572,7.017 15.473,7.161 15.414,7.361 C15.414,7.361 14.983,8.977 14.527,10.775 C14.196,12.079 13.83,13.409 13.83,14.034 C13.83,15.148 14.336,15.944 15.724,15.944 C16.796,15.944 17.644,15.45 18.292,14.764 C18.197,15.135 18.136,15.414 18.13,15.439 C18.074,15.65 18.142,15.838 18.394,15.838 L19.961,15.838 C20.233,15.838 20.337,15.73 20.394,15.494 C20.449,15.269 21.619,10.667 21.619,10.667 C21.928,9.443 22.692,8.632 23.768,8.632 C24.279,8.632 24.72,8.967 24.669,9.618 C24.612,10.333 23.741,12.903 23.741,14.031 C23.741,14.884 24.06,15.945 25.683,15.945 C26.789,15.945 27.603,15.464 28.195,14.786 L27.489,13.941 C27.311,14.094 27.114,14.189 26.896,14.189 Z M41.701,6.873 L40.134,6.873 C40.134,6.873 40.856,4.109 40.873,4.035 C40.942,3.745 40.698,3.578 40.441,3.631 C40.441,3.631 39.23,3.866 39.005,3.913 C38.779,3.958 38.604,4.081 38.522,4.403 C38.512,4.445 37.88,6.873 37.88,6.873 L36.622,6.873 C36.385,6.873 36.245,6.968 36.192,7.188 C36.115,7.504 35.975,8.145 35.936,8.297 C35.885,8.494 36,8.644 36.222,8.644 L37.457,8.644 C37.448,8.677 37.064,10.125 36.725,11.521 L36.724,11.516 C36.72,11.532 36.716,11.546 36.712,11.562 L36.712,11.556 C36.712,11.556 36.708,11.571 36.702,11.598 C36.324,12.968 35.118,14.209 34.201,14.209 C33.721,14.209 33.506,13.909 33.506,13.402 C33.506,12.963 33.792,11.88 34.134,10.537 C34.549,8.901 34.915,7.555 34.955,7.397 C35.006,7.196 34.915,7.02 34.652,7.02 L33.122,7.02 C32.845,7.02 32.746,7.164 32.687,7.364 C32.687,7.364 32.257,8.98 31.8,10.778 C31.469,12.083 31.103,13.412 31.103,14.037 C31.103,15.151 31.609,15.948 32.997,15.948 C34.07,15.948 35.136,15.453 35.783,14.767 C35.783,14.767 36.011,14.521 36.23,14.229 C36.241,14.581 36.324,14.837 36.411,15.018 C36.458,15.119 36.515,15.215 36.581,15.303 C36.582,15.304 36.583,15.306 36.585,15.308 L36.585,15.308 C36.891,15.713 37.398,15.962 38.151,15.962 C39.894,15.962 40.944,14.938 41.562,13.909 L40.704,13.239 C40.333,13.774 39.839,14.175 39.324,14.175 C38.846,14.175 38.579,13.878 38.579,13.372 C38.579,12.935 38.889,11.868 39.229,10.53 C39.344,10.083 39.516,9.401 39.708,8.644 L41.302,8.644 C41.539,8.644 41.678,8.549 41.732,8.329 C41.808,8.012 41.948,7.372 41.988,7.221 C42.039,7.023 41.923,6.873 41.701,6.873 Z M34.126,6.348 C34.905,6.348 35.653,5.706 35.783,4.912 C35.937,4.141 35.409,3.498 34.63,3.498 C33.851,3.498 33.103,4.141 32.971,4.912 C32.819,5.706 33.326,6.348 34.126,6.348 Z"
                }]
            },
            pinit_ja: {
                w: "41",
                h: "18",
                p: [{
                    f: "e60023",
                    d: "M19.822,7.173 C19.822,6.51 19.835,6.276 19.887,5.964 L18.145,5.964 C18.197,6.289 18.197,6.497 18.197,7.16 L18.21,13.192 C18.21,13.946 18.223,14.167 18.249,14.388 C18.327,15.025 18.522,15.441 18.886,15.714 C19.393,16.104 20.29,16.273 21.928,16.273 C22.721,16.273 24.359,16.195 25.126,16.117 C26.504,15.987 26.569,15.974 26.842,15.974 L26.764,14.245 C26.192,14.414 25.906,14.479 25.282,14.557 C24.333,14.687 23.137,14.765 22.266,14.765 C21.005,14.765 20.264,14.648 20.043,14.427 C19.861,14.245 19.809,13.959 19.809,13.231 C19.809,13.179 19.809,13.101 19.822,13.023 L19.822,11.307 C21.993,10.904 24.008,10.228 25.932,9.24 L26.27,9.071 C26.374,9.019 26.4,9.006 26.543,8.954 L25.503,7.485 C24.658,8.278 21.785,9.435 19.822,9.799 L19.822,7.173 Z M27.31,4.872 C26.491,4.872 25.815,5.548 25.815,6.367 C25.815,7.199 26.491,7.875 27.31,7.875 C28.142,7.875 28.818,7.199 28.818,6.367 C28.818,5.548 28.142,4.872 27.31,4.872 L27.31,4.872 Z M27.31,5.522 C27.791,5.522 28.168,5.899 28.168,6.367 C28.168,6.835 27.791,7.225 27.31,7.225 C26.842,7.225 26.465,6.835 26.465,6.367 C26.465,5.899 26.842,5.522 27.31,5.522 L27.31,5.522 Z M30.586,7.654 C31.795,8.33 32.861,9.188 33.901,10.293 L35.019,8.876 C34.018,7.927 33.212,7.329 31.665,6.367 L30.586,7.654 Z M31.041,16.234 C31.34,16.13 31.379,16.117 31.899,16.013 C33.914,15.584 35.526,14.947 36.852,14.063 C38.633,12.88 39.868,11.346 40.973,8.967 C40.31,8.499 40.102,8.304 39.595,7.693 C39.205,8.746 38.841,9.461 38.269,10.293 C37.242,11.775 36.033,12.776 34.408,13.478 C33.225,13.998 31.678,14.375 30.56,14.44 L31.041,16.234 Z M7.458,0 C2.5,0 0,3.522 0,6.459 C0,8.237 0.68,9.819 2.137,10.409 C2.376,10.505 2.59,10.412 2.66,10.15 C2.708,9.969 2.822,9.511 2.873,9.32 C2.943,9.061 2.916,8.97 2.723,8.744 C2.302,8.253 2.034,7.617 2.034,6.716 C2.034,4.104 4.007,1.765 7.172,1.765 C9.975,1.765 11.514,3.461 11.514,5.726 C11.514,8.708 10.183,11.18 8.206,11.18 C7.114,11.18 6.297,10.329 6.559,9.233 C6.872,7.922 7.48,6.509 7.48,5.564 C7.48,4.717 7.022,4.011 6.072,4.011 C4.956,4.011 4.06,5.155 4.06,6.687 C4.06,7.663 4.393,8.323 4.393,8.323 C4.393,8.323 3.251,13.117 3.051,13.957 C2.652,15.629 2.991,17.679 3.019,17.886 C3.036,18.009 3.195,18.038 3.267,17.946 C3.37,17.812 4.7,16.187 5.151,14.562 C5.279,14.102 5.885,11.72 5.885,11.72 C6.248,12.406 7.308,13.009 8.435,13.009 C11.79,13.009 14.066,9.979 14.066,5.923 C14.066,2.857 11.444,0 7.458,0 Z"
                }]
            }
        },
        styles: {
            "span._embed_grid": {
                width: "100%",
                "max-width": "257px",
                "min-width": "140px",
                display: "inline-block",
                border: "1px solid rgba(0,0,0,.1)",
                "border-radius": "%widgetBorderRadius%",
                overflow: "hidden",
                font: '12px "Helvetica Neue", Helvetica, arial, sans-serif',
                color: "rgb(54, 54, 54)",
                "box-sizing": "border-box",
                background: "#fff",
                cursor: "pointer",
                "%prefix%font-smoothing": "antialiased",
                "*": {
                    display: "block",
                    position: "relative",
                    font: "inherit",
                    cursor: "inherit",
                    color: "inherit",
                    "box-sizing": "inherit",
                    margin: "0",
                    padding: "0",
                    "text-align": "left"
                },
                "._hd": {
                    height: "55px",
                    "._img": {
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        height: "36px",
                        width: "36px",
                        "border-radius": "18px",
                        background: "transparent url () 0 0 no-repeat",
                        "background-size": "cover"
                    },
                    "._pinner": {
                        "white-space": "nowrap",
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        width: "75%",
                        position: "absolute",
                        top: "20px",
                        left: "56px",
                        "font-size": "14px",
                        "font-weight": "bold"
                    }
                },
                "._bd": {
                    padding: "0 10px",
                    "-moz-scrollbars": "none",
                    "-ms-overflow-style": "none",
                    "overflow-x": "hidden",
                    "overflow-y": "auto",
                    "._ct": {
                        width: "100%",
                        height: "auto",
                        "._col": {
                            display: "inline-block",
                            width: "100%",
                            padding: "1px",
                            "vertical-align": "top",
                            "min-width": "60px",
                            "._img": {
                                margin: "0",
                                display: "inline-block",
                                width: "100%",
                                background: "transparent url() 0 0 no-repeat",
                                "background-size": "cover",
                                "border-radius": "8px"
                            }
                        }
                    }
                },
                "._ft": {
                    padding: "10px",
                    "._button": {
                        "border-radius": "16px",
                        "text-align": "center",
                        "background-color": "#efefef",
                        border: "1px solid #efefef",
                        position: "relative",
                        display: "block",
                        overflow: "hidden",
                        height: "32px",
                        width: "100%",
                        "min-width": "70px",
                        padding: "0 3px",
                        "._label": {
                            position: "absolute",
                            left: "0",
                            width: "100%",
                            "text-align": "center",
                            "&._top": {
                                top: "0"
                            },
                            "&._bottom": {
                                bottom: "0"
                            },
                            "._string": {
                                "white-space": "pre",
                                color: "#746d6a",
                                "font-size": "13px",
                                "font-weight": "bold",
                                "vertical-align": "top",
                                display: "inline-block",
                                height: "32px",
                                "line-height": "32px"
                            },
                            "._logo": {
                                display: "inline-block",
                                "vertical-align": "bottom",
                                height: "32px",
                                width: "80px",
                                background: "transparent url(%lockup%) 50% 50% no-repeat",
                                "background-size": "contain"
                            }
                        },
                        "&:hover": {
                            border: "1px solid rgba(0,0,0,.1)"
                        }
                    }
                },
                "&._noscroll ._bd": {
                    overflow: "hidden"
                },
                "&._board": {
                    "._hd": {
                        "._pinner": {
                            top: "10px"
                        },
                        "._board": {
                            "white-space": "nowrap",
                            overflow: "hidden",
                            "text-overflow": "ellipsis",
                            width: "75%",
                            position: "absolute",
                            bottom: "10px",
                            left: "56px",
                            color: "#363636",
                            "font-size": "12px"
                        }
                    }
                },
                "&._c2": {
                    "max-width": "494px",
                    "min-width": "140px",
                    "._bd ._ct ._col": {
                        width: "50%"
                    }
                },
                "&._c3": {
                    "max-width": "731px",
                    "min-width": "200px",
                    "._bd ._ct ._col": {
                        width: "33.33%"
                    }
                },
                "&._c4": {
                    "max-width": "968px",
                    "min-width": "260px",
                    "._bd ._ct ._col": {
                        width: "25%"
                    }
                },
                "&._c5": {
                    "max-width": "1205px",
                    "min-width": "320px",
                    "._bd ._ct ._col": {
                        width: "20%"
                    }
                },
                "&._c6": {
                    "max-width": "1442px",
                    "min-width": "380px",
                    "._bd ._ct ._col": {
                        width: "16.66%"
                    }
                },
                "&._c7": {
                    "max-width": "1679px",
                    "min-width": "440px",
                    "._bd ._ct ._col": {
                        width: "14.28%"
                    }
                },
                "&._c8": {
                    "max-width": "1916px",
                    "min-width": "500px",
                    "._bd ._ct ._col": {
                        width: "12.5%"
                    }
                },
                "&._c9": {
                    "max-width": "2153px",
                    "min-width": "560px",
                    "._bd ._ct ._col": {
                        width: "11.11%"
                    }
                },
                "&._c10": {
                    "max-width": "2390px",
                    "min-width": "620px",
                    "._bd ._ct ._col": {
                        width: "10%"
                    }
                }
            },
            "span._embed_pin": {
                "min-width": "160px",
                "max-width": "236px",
                width: "100%",
                "border-radius": "16px",
                font: '12px "SF Pro", "Helvetica Neue", Helvetica, arial, sans-serif',
                display: "inline-block",
                background: "rgba(0,0,0,.1)",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,.1)",
                "box-sizing": "border-box",
                "%prefix%font-smoothing": "antialiased",
                "%prefix%osx-font-smoothing": "grayscale",
                "*": {
                    display: "block",
                    position: "relative",
                    font: "inherit",
                    cursor: "inherit",
                    color: "inherit",
                    "box-sizing": "inherit",
                    margin: "0",
                    padding: "0",
                    "text-align": "left"
                },
                "._pages": {
                    height: "100%",
                    width: "100%",
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    "._page": {
                        position: "absolute",
                        left: "0",
                        "transition-property": "left",
                        "transition-duration": ".25s",
                        "transition-timing-function": "ease-in",
                        height: "inherit",
                        width: "inherit",
                        "&._past": {
                            left: "-100%"
                        },
                        "&._future": {
                            left: "100%"
                        },
                        "._blocks": {
                            height: "inherit",
                            width: "inherit",
                            overflow: "hidden",
                            "._block": {
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                overflowX: "hidden",
                                "._container": {
                                    position: "absolute",
                                    width: "100%",
                                    "&._top": {
                                        top: "0"
                                    },
                                    "&._middle": {
                                        top: "50%",
                                        transform: "translateY(-50%)"
                                    },
                                    "&._bottom": {
                                        bottom: "0"
                                    },
                                    "&._left": {
                                        "text-align": "left"
                                    },
                                    "&._center": {
                                        "text-align": "center"
                                    },
                                    "&._right": {
                                        "text-align": "right"
                                    },
                                    "._paragraph": {
                                        "text-align": "inherit",
                                        display: "inline",
                                        "word-break": "break-word",
                                        "font-size": "16px",
                                        "line-height": "1.24em",
                                        "border-radius": "3px",
                                        padding: "0.1em 0.2em"
                                    },
                                    _video: {
                                        position: "absolute",
                                        height: "100%",
                                        width: "auto",
                                        left: "50%",
                                        transform: "translateX(-50%)"
                                    },
                                    "&._video": {
                                        height: "100%"
                                    }
                                },
                                "._image": {
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    "background-position": "50% 50%",
                                    "background-repeat": "no-repeat",
                                    "&._containMe": {
                                        "background-size": "contain"
                                    },
                                    "&._coverMe": {
                                        "background-size": "cover"
                                    }
                                },
                                video: {
                                    position: "absolute",
                                    height: "100%",
                                    width: "auto",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    "&._isNative": {
                                        width: "100%"
                                    }
                                }
                            }
                        }
                    },
                    "._overlay": {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        opacity: ".001",
                        background: "rgba(0,0,0,.03)",
                        cursor: "pointer",
                        "user-select": "none",
                        "._repin": {
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            height: "40px",
                            color: "#fff",
                            background: "%saveButtonBackgroundColor% url(%logo%) 10px 50% no-repeat",
                            "background-size": "18px 18px",
                            "text-indent": "36px",
                            "font-size": "14px",
                            "line-height": "40px",
                            "font-weight": "bold",
                            "border-radius": "20px",
                            padding: "0 12px 0 0",
                            width: "auto",
                            "z-index": "2"
                        },
                        "._price": {
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            height: "40px",
                            background: "rgba(255,255,255,.9)",
                            "font-size": "14px",
                            "line-height": "40px",
                            "font-weight": "bold",
                            "border-radius": "20px",
                            padding: "0 12px",
                            width: "auto",
                            "z-index": "2"
                        },
                        "._controls": {
                            position: "absolute",
                            height: "64px",
                            width: "64px",
                            top: "50%",
                            left: "50%",
                            "margin-top": "-32px",
                            "margin-left": "-32px",
                            "._play": {
                                background: "rgba(0,0,0,.8) url(%play%) 50% 50% no-repeat"
                            },
                            "._pause": {
                                background: "rgba(0,0,0,.8) url(%pause%) 50% 50% no-repeat"
                            },
                            "._pause, ._play": {
                                position: "absolute",
                                display: "block",
                                height: "64px",
                                width: "64px",
                                "border-radius": "32px"
                            }
                        },
                        "._nav": {
                            "user-select": "none",
                            position: "absolute",
                            height: "100%",
                            width: "20%",
                            background: "transparent url() 0 0 no-repeat",
                            "background-size": "24px 24px",
                            "z-index": "1",
                            "&._forward, &._forward_noop": {
                                right: "0"
                            },
                            "&._backward, &._backward_noop": {
                                left: "0"
                            },
                            "&._forward": {
                                "background-image": "url(%forward%)",
                                "background-position": "100% 50%"
                            },
                            "&._backward": {
                                "background-image": "url(%backward%)",
                                "background-position": "0 50%"
                            }
                        },
                        "._progress": {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            height: "36px",
                            width: "100%",
                            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.2))",
                            "text-align": "center",
                            "._indicator": {
                                display: "inline-block",
                                height: "8px",
                                width: "8px",
                                margin: "16px 2px 0",
                                background: "rgba(255,255,255,.5)",
                                "border-radius": "50%",
                                "&._current": {
                                    background: "#fff"
                                }
                            }
                        },
                        "&:hover": {
                            opacity: "1"
                        }
                    }
                },
                "._footer": {
                    position: "relative",
                    display: "block",
                    height: "96px",
                    padding: "16px",
                    color: "#333",
                    background: "#fff",
                    "._container": {
                        position: "relative",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "#fff",
                        "._title": {
                            position: "absolute",
                            left: "0px",
                            right: "0px",
                            "font-size": "16px",
                            "font-weight": "bold",
                            overflow: "hidden",
                            "white-space": "pre",
                            "text-overflow": "ellipsis"
                        },
                        "._avatar": {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            height: "30px",
                            width: "30px",
                            "border-radius": "50%",
                            background: "transparent url() 0 0 no-repeat",
                            "background-size": "cover",
                            "box-shadow": "%thinShadow%"
                        },
                        "._deets": {
                            position: "absolute",
                            left: "40px",
                            right: "0px",
                            bottom: "0px",
                            height: "30px",
                            span: {
                                left: "0px",
                                right: "0px",
                                position: "absolute",
                                "font-size": "12px",
                                overflow: "hidden",
                                "white-space": "pre",
                                "text-overflow": "ellipsis"
                            },
                            "._topline": {
                                top: "0"
                            },
                            "._bottomline": {
                                bottom: "0"
                            }
                        }
                    },
                    "&::after": {
                        content: '"------------------------------------------------------------------------------------------------------------------------"',
                        display: "block",
                        height: "1px",
                        "line-height": "1px",
                        color: "transparent"
                    },
                    "&._uno": {
                        "._container": {
                            "._deets": {
                                "._topline": {
                                    top: "8px"
                                },
                                "._bottomline": {
                                    display: "none"
                                }
                            }
                        }
                    }
                },
                "&._fresh": {
                    "._pages": {
                        "._overlay": {
                            opacity: "1"
                        }
                    }
                },
                "&._medium": {
                    "min-width": "237px",
                    "max-width": "345px",
                    "border-radius": "24px",
                    "._pages": {
                        "._page": {
                            "._blocks": {
                                "._block": {
                                    "._container": {
                                        "._paragraph": {
                                            "font-size": "21px",
                                            "line-height": "1.23em",
                                            "border-radius": "5px",
                                            padding: "2px 3px"
                                        }
                                    }
                                }
                            }
                        },
                        "._overlay": {
                            "._progress": {
                                "._indicator": {
                                    margin: "16px 4px 0"
                                }
                            }
                        }
                    }
                },
                "&._large": {
                    "min-width": "346px",
                    "max-width": "600px",
                    "border-radius": "36px",
                    "._pages": {
                        "._page": {
                            "._blocks": {
                                "._block": {
                                    "._container": {
                                        "._paragraph": {
                                            "font-size": "27px",
                                            "line-height": "1.11em",
                                            "border-radius": "5px",
                                            padding: "3px 4.5px"
                                        }
                                    }
                                }
                            }
                        },
                        "._overlay": {
                            "._progress": {
                                "._indicator": {
                                    margin: "16px 4px 0"
                                }
                            }
                        }
                    }
                },
                "&._atStart": {
                    "._pages": {
                        "._overlay": {
                            "._backward": {
                                display: "none"
                            }
                        }
                    }
                },
                "&._atEnd": {
                    "._pages": {
                        "._overlay": {
                            "._forward": {
                                display: "none"
                            }
                        }
                    }
                }
            },
            "._button_follow": {
                display: "inline-block",
                color: "#363636",
                "box-sizing": "border-box",
                "box-shadow": "inset 0 0 1px #888",
                "border-radius": "%buttonBorderRadius%",
                font: 'bold 11px/20px "Helvetica Neue", Helvetica, arial, sans-serif !important',
                "box-sizing": "border-box",
                cursor: "pointer",
                "%prefix%font-smoothing": "antialiased",
                height: "20px",
                padding: "0 4px 0 20px",
                "background-color": "#efefef",
                position: "relative",
                "white-space": "nowrap",
                "vertical-align": "baseline",
                "&:hover": {
                    "box-shadow": "inset 0 0 1px #000"
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "14px",
                    width: "14px",
                    top: "3px",
                    left: "3px",
                    background: "transparent url(%logo%) 0 0 no-repeat",
                    "background-size": "14px 14px"
                },
                "&._tall": {
                    height: "26px",
                    "line-height": "26px",
                    "font-size": "13px",
                    padding: "0 6px 0 25px",
                    "border-radius": "%buttonBorderRadiusTall%",
                    "&::after": {
                        height: "18px",
                        width: "18px",
                        top: "4px",
                        left: "4px",
                        "background-size": "18px 18px"
                    }
                }
            },
            "._button_pin": {
                cursor: "pointer",
                display: "inline-block",
                "box-sizing": "border-box",
                "box-shadow": "inset 0 0 1px #888",
                "border-radius": "%buttonBorderRadius%",
                height: "20px",
                width: "40px",
                "%prefix%font-smoothing": "antialiased",
                background: "#efefef url(%pinit_en_red%) 50% 50% no-repeat",
                "background-size": "75%",
                position: "relative",
                font: '12px "Helvetica Neue", Helvetica, arial, sans-serif',
                color: "#555",
                "box-sizing": "border-box",
                "text-align": "center",
                "vertical-align": "baseline",
                "&:hover": {
                    "box-shadow": "inset 0 0 1px #000"
                },
                "&._above": {
                    "._count": {
                        position: "absolute",
                        top: "-28px",
                        left: "0",
                        height: "28px",
                        width: "inherit",
                        "line-height": "24px",
                        background: "transparent url(%above%) 0 0 no-repeat",
                        "background-size": "40px 28px"
                    },
                    "&._padded": {
                        "margin-top": "28px"
                    }
                },
                "&._beside": {
                    "._count": {
                        position: "absolute",
                        right: "-45px",
                        "text-align": "center",
                        "text-indent": "5px",
                        height: "inherit",
                        width: "45px",
                        "font-size": "11px",
                        "line-height": "20px",
                        background: "transparent url(%beside%)",
                        "background-size": "cover"
                    },
                    "&._padded": {
                        "margin-right": "45px"
                    }
                },
                "&._ja": {
                    "background-image": "url(%pinit_ja_red%)",
                    "background-size": "72%"
                },
                "&._red": {
                    "background-color": "#e60023",
                    "background-image": "url(%pinit_en_white%)",
                    "&._ja": {
                        "background-image": "url(%pinit_ja_white%)"
                    }
                },
                "&._white": {
                    "background-color": "#fff"
                },
                "&._save": {
                    "&:hover": {
                        "background-color": "%saveButtonBackgroundColor%",
                        "box-shadow": "none",
                        color: "#fff!important"
                    },
                    "border-radius": "2px",
                    "text-indent": "20px",
                    width: "auto",
                    padding: "0 4px 0 0",
                    "text-align": "center",
                    "text-decoration": "none",
                    font: '11px/20px "Helvetica Neue", Helvetica, sans-serif',
                    "font-weight": "bold",
                    color: "#fff!important",
                    background: "%saveButtonBackgroundColor% url(%logo%) 3px 50% no-repeat",
                    "background-size": "14px 14px",
                    "font-weight": "bold",
                    "-webkit-font-smoothing": "antialiased",
                    "._count": {
                        "text-indent": "0",
                        position: "absolute",
                        color: "#555",
                        background: "#efefef",
                        "border-radius": "2px",
                        "&::before": {
                            content: '""',
                            position: "absolute"
                        }
                    },
                    "&._beside": {
                        "._count": {
                            right: "-46px",
                            height: "20px",
                            width: "40px",
                            "font-size": "10px",
                            "line-height": "20px",
                            "&::before": {
                                top: "3px",
                                left: "-4px",
                                "border-right": "7px solid #efefef",
                                "border-top": "7px solid transparent",
                                "border-bottom": "7px solid transparent"
                            }
                        }
                    },
                    "&._above": {
                        "._count": {
                            top: "-36px",
                            width: "100%",
                            height: "30px",
                            "font-size": "10px",
                            "line-height": "30px",
                            "&::before": {
                                bottom: "-4px",
                                left: "4px",
                                "border-top": "7px solid #efefef",
                                "border-right": "7px solid transparent",
                                "border-left": "7px solid transparent"
                            }
                        },
                        "&._padded": {
                            "margin-top": "28px"
                        }
                    }
                },
                "&._tall": {
                    height: "28px",
                    width: "56px",
                    "border-radius": "%buttonBorderRadiusTall%",
                    "&._above": {
                        "._count": {
                            position: "absolute",
                            height: "37px",
                            width: "inherit",
                            top: "-37px",
                            left: "0",
                            "line-height": "30px",
                            "font-size": "14px",
                            background: "transparent url(%above%)",
                            "background-size": "cover"
                        },
                        "&._padded": {
                            "margin-top": "37px"
                        }
                    },
                    "&._beside": {
                        "._count": {
                            "text-indent": "5px",
                            position: "absolute",
                            right: "-63px",
                            height: "inherit",
                            width: "63px",
                            "font-size": "14px",
                            "line-height": "28px",
                            background: "transparent url(%beside%)",
                            "background-size": "cover"
                        },
                        "&._padded": {
                            "margin-right": "63px"
                        }
                    },
                    "&._save": {
                        "border-radius": "4px",
                        width: "auto",
                        "background-position-x": "6px",
                        "background-size": "18px 18px",
                        "text-indent": "29px",
                        font: '14px/28px "Helvetica Neue", Helvetica, Arial, "sans-serif"',
                        "font-weight": "bold",
                        padding: "0 6px 0 0",
                        "._count": {
                            position: "absolute",
                            color: "#555",
                            "font-size": "12px",
                            "text-indent": "0",
                            background: "#efefef",
                            "border-radius": "4px",
                            "&::before": {
                                content: '""',
                                position: "absolute"
                            }
                        },
                        "&._above": {
                            "._count": {
                                "font-size": "14px",
                                top: "-50px",
                                width: "100%",
                                height: "44px",
                                "line-height": "44px",
                                "&::before": {
                                    bottom: "-4px",
                                    left: "7px",
                                    "border-top": "7px solid #efefef",
                                    "border-right": "7px solid transparent",
                                    "border-left": "7px solid transparent"
                                }
                            }
                        },
                        "&._beside": {
                            "._count": {
                                "font-size": "14px",
                                right: "-63px",
                                width: "56px",
                                height: "28px",
                                "line-height": "28px",
                                "&::before": {
                                    top: "7px",
                                    left: "-4px",
                                    "border-right": "7px solid #efefef",
                                    "border-top": "7px solid transparent",
                                    "border-bottom": "7px solid transparent"
                                }
                            }
                        }
                    }
                },
                "&._round": {
                    height: "16px",
                    width: "16px",
                    background: "transparent url(%logo%) 0 0 no-repeat",
                    "background-size": "16px 16px",
                    "box-shadow": "none",
                    "&._tall": {
                        height: "32px",
                        width: "32px",
                        "background-size": "32px 32px"
                    }
                }
            }
        }
    });

}
var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function () {
        var e = window, h = document, k = "replace";
        var m = function (a, c, d, b, g) {
            c = encodeURIComponent(c)[k](/\(/g, "%28")[k](/\)/g, "%29");
            a = a + "=" + c + "; path=" + (d || "/") + "; ";
            g && (a += "expires=" + (new Date((new Date).getTime() + g)).toGMTString() + "; ");
            b && "none" != b && (a += "domain=" + b + ";");
            b = h.cookie;
            h.cookie = a;
            return b != h.cookie
        }, p = function (a) {
            var c = h.body;
            try {
                c.addEventListener ? c.addEventListener("click", a, !1) : c.attachEvent && c.attachEvent("onclick", a)
            } catch (d) {
            }
        };
        var q = function (a, c, d, b) {
            this.get = function () {
                for (var b = void 0, c = [], d = h.cookie.split(";"), l = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), f = 0; f < d.length; f++) {
                    var n = d[f].match(l);
                    n && c.push(decodeURIComponent(n[1][k](/%28/g, "(")[k](/%29/g, ")")))
                }
                for (d = 0; d < c.length; d++) c[d] && (b = c[d]);
                return b
            };
            this.set = function (g) {
                return m(a, g, b, c, 1E3 * d)
            };
            this.remove = function () {
                return m(a, "", b, c, -100)
            }
        };
        var t = function (a, c) {
            var d = void 0;
            if ("function" == typeof a.get && "function" == typeof a.set) {
                var b = c || {}, g = b.hasOwnProperty("cookieName") ? b.cookieName : "_gali",
                    r = b.hasOwnProperty("cookieTimeout") ? b.cookieTimeout : 30,
                    s = b.hasOwnProperty("levels") ? b.levels : 3, b = a.get("cookieDomain"), l = a.get("cookiePath"),
                    f = new q(g, b, r, l);
                d || (d = f.get());
                d && a.set("&linkid", d);
                p(function (a) {
                    a = a || e.event;
                    a = a.target || a.srcElement;
                    for (var b, c = 0; a && c <= s; c++) {
                        if (b = a.getAttribute("id")) {
                            a = b;
                            100 < a.length ? f.remove() : a ? f.set(a) : f.remove();
                            return
                        }
                        a = a.parentElement
                    }
                    f.remove()
                })
            }
        };
        (function () {
            e.gaplugins = e.gaplugins || {};
            e.gaplugins.LinkId = t;
            var a = e.GoogleAnalyticsObject || "ga";
            e[a] = e[a] || function () {
                (e[a].q = e[a].q || []).push(arguments)
            };
            e[a]("provide", "linkid", t)
        })();
    })();


}

