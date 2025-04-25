import requests
from bs4 import BeautifulSoup
import json

url = "https://domeggook.com/main/item/itemPopular.php"
headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

product_list = []
items = soup.select(".product_list_wrap .item_box")

for item in items:
    title_el = item.select_one(".item_name")
    link_el = item.select_one("a")
    price_el = item.select_one(".item_price")

    if title_el and link_el and price_el:
        title = title_el.text.strip()
        href = link_el.get("href")
        product_url = "https://domeggook.com" + href
        price = price_el.text.strip()

        product_list.append({
            "title": title,
            "productUrl": product_url,
            "price": price
        })

# JSON 파일로 저장
with open("domeggook_popular.json", "w", encoding="utf-8") as f:
    json.dump(product_list, f, ensure_ascii=False, indent=2)

print(f"✅ 도매꾹 인기상품 {len(product_list)}개 저장 완료 (domeggook_popular.json)")
