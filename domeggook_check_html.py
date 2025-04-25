from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://domeggook.com/main/item/itemPopular.php", timeout=60000)
    page.wait_for_timeout(6000)  # 강제로 로딩 여유 줌

    html = page.content()
    with open("domeggook_check.html", "w", encoding="utf-8") as f:
        f.write(html)

    print("✅ 전체 HTML 저장 완료: domeggook_check.html")
    browser.close()
