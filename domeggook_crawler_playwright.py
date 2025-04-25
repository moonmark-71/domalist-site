from playwright.sync_api import sync_playwright
import json

output = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://domeggook.com/main/item/itemPopular.php", timeout=60000)

    # ✅ 인기상품 목록이 로드될 때까지 대기
    page.wait_for_selector("#itemPopularsUl li", timeout=20000)

    # ✅ 모든 인기상품 li 요소들 가져오기
    items = page.query_selector_all("#itemPopularsUl li")

    for item in items:
        link_el = item.query_selector("a[href]")
        img_el = item.query_selector("img")
        title_el = item.query_selector(".title")
        price_el = item.query_selector(".price")

        if link_el and img_el and title_el and price_el:
            href = link_el.get_attribute("href")
            img = img_el.get_attribute("src")
            title = title_el.inner_text().strip()
            price = price_el.inner_text().strip()

            output.append({
                "title": title,
                "productUrl": "https://domeggook.com" + href,
                "imageUrl": img,
                "price": price
            })

    browser.close()

# 🔄 결과 저장
with open("domeggook_popular.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"✅ 도매꾹 인기상품 {len(output)}개 저장 완료! (domeggook_popular.json)")
