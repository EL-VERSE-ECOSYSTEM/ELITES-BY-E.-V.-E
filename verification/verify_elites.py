from playwright.sync_api import sync_playwright
import time
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # 1. Landing Page
        print("Verifying Landing Page...")
        try:
            page.goto("http://localhost:3000", timeout=30000)
            time.sleep(5)
            page.screenshot(path="verification/landing.png")
            print(f"Screenshot saved to {os.path.abspath('verification/landing.png')}")
        except Exception as e:
            print(f"Failed to verify landing: {e}")

        browser.close()

if __name__ == "__main__":
    run_verification()
