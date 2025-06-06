(function() {
    // قائمة النطاقات المسموحة
    const allowedDomains = ["https://kurdish-manhwa.blogspot.com/", "orcamanga.site", "blogger.com"];
    
    // جلب النطاق الحالي بدون www
    const currentDomain = window.location.hostname.replace(/^www\./i, '');
    
    // التحقق من النطاق
    if (!allowedDomains.includes(currentDomain)) {
        showWarningPopup();
    }
    
    function showWarningPopup() {
        // منع التمرير
        document.body.style.overflow = 'hidden';
        
        // إنشاء عناصر البوب اب
        const overlay = document.createElement('div');
        overlay.id = 'domainWarningOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.97);
            z-index: 999999;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: #1a1a1a;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            max-width: 600px;
            width: 95%;
            box-shadow: 0 0 20px rgba(255,68,68,0.3);
        `;
        
        // إضافة المحتوى
        content.innerHTML = `
            <style>
                .warning-title {
                    color: #FF5252;
                    font-size: 2rem;
                    margin: 0 0 1.5rem;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                .warning-text {
                    color: #e0e0e0;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin: 1rem 0;
                }
                #domainCountdown {
                    color: #FFD740;
                    font-size: 1.4rem;
                    margin: 1.5rem 0;
                    font-weight: bold;
                }
                .warning-actions {
                    margin-top: 2rem;
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .warning-btn {
                    padding: 12px 30px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: bold;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .primary-btn {
                    background: #FF5252;
                    color: white;
                }
                .secondary-btn {
                    background: #5865F2;
                    color: white;
                }
                .warning-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                }
            </style>
            
            <h1 class="warning-title">⚠️ استخدام غير مصرح به!</h1>
            <p class="warning-text">
                هذا القالب مرخص حصريًا لاستخدام موقع 
                <strong style="color:#4CAF50">orcamanga.site</strong>
            </p>
            <div id="domainCountdown">جاري التوجيه خلال 5 ثوانٍ...</div>
            <div class="warning-actions">
                <a href="https://orcamanga.site" class="warning-btn primary-btn">
                    الانتقال الآن
                </a>
                <button onclick="handleSupport()" class="warning-btn secondary-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:5px;">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    الدعم الفني
                </button>
            </div>
        `;
        
        overlay.appendChild(content);
        document.body.appendChild(overlay);
        
        // بدء العد التنازلي
        startCountdown(5);
    }
    
    function startCountdown(seconds) {
        const countdownElement = document.getElementById('domainCountdown');
        let remaining = seconds;
        
        const timer = setInterval(() => {
            remaining--;
            countdownElement.textContent = `جاري التوجيه خلال ${formatArabicTime(remaining)}...`;
            
            if (remaining <= 0) {
                clearInterval(timer);
                window.location.href = "https://orcamanga.site";
            }
        }, 1000);
    }
    
    function formatArabicTime(seconds) {
        const arabicNumbers = {
            0: '٠', 1: '١', 2: '٢', 3: '٣', 
            4: '٤', 5: '٥', 6: '٦', 7: '٧', 
            8: '٨', 9: '٩'
        };
        
        const formatted = String(seconds).split('').map(digit => 
            arabicNumbers[digit] || digit
        ).join('');
        
        return `${formatted} ثانية`;
    }
    
    window.handleSupport = function() {
        const discordTag = '✈Escanor';
        navigator.clipboard.writeText(discordTag)
            .then(() => {
                alert(`تم نسخ معرف الديسكورد: ${discordTag}`);
            })
            .catch(() => {
                prompt('انسخ المعرف يدويًا:', discordTag);
            });
    }
})();
  const genreMap = {
    &quot;Action&quot;: &quot;ئەكشن&quot;, &quot;Adventure&quot;: &quot;سەرکێشی&quot;, &quot;Cars&quot;: &quot;ئۆتۆمبێل&quot;, &quot;Comedy&quot;: &quot;كۆمیدی&quot;,
    &quot;Dementia&quot;: &quot;بیرچوونەوە&quot;, &quot;Demons&quot;: &quot;شەیتانەکان&quot;, &quot;Drama&quot;: &quot;دراما&quot;, &quot;Ecchi&quot;: &quot;ئیچی&quot;,
    &quot;Fantasy&quot;: &quot;فانتازیا&quot;, &quot;Game&quot;: &quot;یاری&quot;, &quot;Harem&quot;: &quot;هاریم&quot;, &quot;Historical&quot;: &quot;مێژوویی&quot;,
    &quot;Horror&quot;: &quot;ترسناک&quot;, &quot;Josei&quot;: &quot;جۆسەی&quot;, &quot;Kids&quot;: &quot;منداڵان&quot;, &quot;Magic&quot;: &quot;سیحر&quot;,
    &quot;Martial Arts&quot;: &quot;هونەری شەڕ&quot;, &quot;Mecha&quot;: &quot;مێكا&quot;, &quot;Military&quot;: &quot;سەربازی&quot;, &quot;Music&quot;: &quot;میوزیک&quot;,
    &quot;Mystery&quot;: &quot;نهێنی&quot;, &quot;Parody&quot;: &quot;پەڕۆدی&quot;, &quot;Police&quot;: &quot;پۆلیس&quot;, &quot;Psychological&quot;: &quot;دەروونی&quot;,
    &quot;Romance&quot;: &quot;عاشقانه&quot;, &quot;Samurai&quot;: &quot;سامورای&quot;, &quot;School&quot;: &quot;قوتابخانە&quot;, &quot;Sci-Fi&quot;: &quot;زانستی-فانتازی&quot;,
    &quot;Seinen&quot;: &quot;سێنین&quot;, &quot;Shoujo&quot;: &quot;شۆجۆ&quot;, &quot;Shoujo Ai&quot;: &quot;شۆجۆ ئای&quot;, &quot;Shounen&quot;: &quot;شۆنین&quot;,
    &quot;Shounen Ai&quot;: &quot;شۆنین ئای&quot;, &quot;Slice of Life&quot;: &quot;ژیانی ڕۆژانە&quot;, &quot;Space&quot;: &quot;ئاسمان&quot;,
    &quot;Sports&quot;: &quot;وەرزشی&quot;, &quot;Super Power&quot;: &quot;هێزی سوپەر&quot;, &quot;Supernatural&quot;: &quot;نا سرووشتی&quot;,
    &quot;Thriller&quot;: &quot;تووڕەیی&quot;, &quot;Vampire&quot;: &quot;ڤامپایەر&quot;, &quot;Isekai&quot;: &quot;ئیسیکای&quot;, &quot;Gender Bender&quot;: &quot;پەروەردەکردن&quot;,
    &quot;Cultivation&quot;: &quot;یەک تەقە&quot;, &quot;One Shot&quot;: &quot;کارەسات&quot;, &quot;Tragedy&quot;: &quot;گەڕانەوەی كات&quot;,
    &quot;Time Travel&quot;: &quot;وێبتوون&quot;, &quot;Webtoons&quot;: &quot;دڕندە&quot;, &quot;Monster&quot;: &quot;تاوان&quot;, &quot;Crime&quot;: &quot;تاوان&quot;,
    &quot;Manga&quot;: &quot;مانهوا&quot;, &quot;Manhwa&quot;: &quot;مانهوای کۆری&quot;, &quot;Manhua&quot;: &quot;مانهوای چینی&quot;, &quot;Comic&quot;: &quot;کۆمیک&quot;,
    &quot;Novel&quot;: &quot;ڕۆمان&quot;, &quot;Light Novel&quot;: &quot;ڕۆمانی ئاسان&quot;, &quot;Web Novel&quot;: &quot;ڕۆمانی وێب&quot;,
    &quot;Manga Chapter&quot;: &quot;چاپتەر&quot;, &quot;Novel Chapter&quot;: &quot;چاپتەر&quot;, &quot;Chapter&quot;: &quot;چاپتەر&quot;,
    &quot;Comming Soon&quot;: &quot;بەمزووانە&quot;, &quot;Ongoing&quot;: &quot;بەردەوامە&quot;, &quot;Completed&quot;: &quot;تەواو بووە&quot;,
    &quot;Dropped&quot;: &quot;فەرامۆش کراوە&quot;, &quot;Hiatus&quot;: &quot;وەستاندراوە&quot;
  };

  function translateGenres() {
    // ترجمة عامة لكل العناصر
    document.querySelectorAll(&#39;a, span, li, div&#39;).forEach(el =&gt; {
      const txt = el.textContent.trim();
      if (genreMap[txt]) {
        el.textContent = genreMap[txt];
      }
    });

    // ترجمة مخصصة لعناصر imptdt (الحالة)
    document.querySelectorAll(&#39;.imptdt&#39;).forEach(el =&gt; {
      const txt = el.textContent.trim();
      if (genreMap[txt]) {
        el.textContent = genreMap[txt];
      }
    });
  }
  function translateTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmed = node.textContent.trim();
      if (genreMap[trimmed]) {
        node.textContent = genreMap[trimmed];
      }
    } else {
      node.childNodes.forEach(child =&gt; translateTextNodes(child));
    }
  }

  function translateGenresDeep() {
    // نطبق على كل العناصر اللي ممكن تحوي تصنيفات
    document.querySelectorAll(&#39;a, span, li, div, .imptdt&#39;).forEach(el =&gt; {
      translateTextNodes(el);
    });
  }

  document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
    translateGenresDeep();
    setTimeout(translateGenresDeep, 1000);
  });

