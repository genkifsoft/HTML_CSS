#### Chọn selector
```bash
    :nth-child(2): Chọn phần tử thứ 2
    :nth-child(2n): Chọn phần tử thứ 2, 4, 6, 8....
    :nth-child(2n + 1): Chọn phần tử thứ 1, 3, 5, 7..
```
#### Làm thế nào chọn phần tử **trong một khoảng** và **ngoại trừ trong 1 khoảng**
```bash
    :nth-child(-n + 5) Chọn phần tử từ 1 đến 5
    :nth-child(:not(-n + 5)) Chọn tất cả phần tử ngoại trừ từ 1 đến 5
    :nth-child(n + 3):nth-child(-n + 7) Chọn phần tử từ 3 đến 7
```