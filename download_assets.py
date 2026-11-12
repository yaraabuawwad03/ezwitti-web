import os
import urllib.request
import ssl

ssl_context = ssl.create_default_context()

assets = {
    "hero_bg.png": "https://www.figma.com/api/mcp/asset/14a1defa-c7c3-4e10-9a52-a589afbe9583.png",
    "wall_of_kindness_popup.png": "https://www.figma.com/api/mcp/asset/71a5328d-e347-450e-81a1-9a209c288395.png",
    "founder_mahmoud.png": "https://www.figma.com/api/mcp/asset/ed557ea2-c418-4793-b801-3217c1224d89.png",
    "queen_rania.png": "https://www.figma.com/api/mcp/asset/f8df73ee-cb5f-4b06-aafb-c158e1aff1fd.png",
    "crown_prince_award.png": "https://www.figma.com/api/mcp/asset/f50259c4-a5e2-4d05-b799-2cb72ecb206b.png",
    "wall_notes_amman_voice.png": "https://www.figma.com/api/mcp/asset/c9583922-288c-4e43-b6f0-f6fb448aa047.png",
    "omar_farooq.png": "https://www.figma.com/api/mcp/asset/0bf5c4b5-008b-4fd3-85ef-024ec915426c.png",
    "salt_branch.png": "https://www.figma.com/api/mcp/asset/5f2cdafe-2464-4b82-b8db-1654e2ac9e3d.png",
    "story_portrait.png": "https://www.figma.com/api/mcp/asset/f8b27b69-b416-47e0-942b-f066a4fee4c3.png",
    "story_editorial.png": "https://www.figma.com/api/mcp/asset/627fc648-4441-4999-a164-c1d0622a30e8.png",
}

out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "images")
os.makedirs(out_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

for name, url in assets.items():
    dest = os.path.join(out_dir, name)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context) as response, open(dest, "wb") as out_file:
            out_file.write(response.read())
        print(f"Downloaded: {name} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
