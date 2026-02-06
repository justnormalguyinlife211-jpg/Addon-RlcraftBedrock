# Addon-RlcraftBedrock

Bộ khung addon Bedrock theo chủ đề **RLCraft**, gồm:

- `resource_pack/`: tài nguyên hiển thị (tên pack, mô tả, loading tips).
- `behavior_pack/`: logic hành vi gameplay (khung manifest và dependency).

## Cấu trúc

```text
resource_pack/
  manifest.json
  texts/
    en_US.lang
    languages.json

behavior_pack/
  manifest.json
  texts/
    en_US.lang
    languages.json
```

## Cách dùng nhanh

1. Copy `resource_pack` vào thư mục `resource_packs` của Minecraft Bedrock.
2. Copy `behavior_pack` vào thư mục `behavior_packs` của Minecraft Bedrock.
3. Tạo/chỉnh thế giới và bật cả 2 pack để chạy addon.
