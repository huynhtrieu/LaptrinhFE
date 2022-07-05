#include <bits/stdc++.h>

void nhap(int a[], int &n){
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
}

void bubbleSort(int a[], int n){
    for (int i = 0; i < n-1; i++){
        for (int j = 0; j < n-1; j--){
            if(a[j] < a[j-1]) {
                int t = a[j];
                a[j] = a[j-1];
                a[j-1] = t; 
            }
        }
    }
}

void xuat(int a[], int n){
    for(int i=0; i<n; i++)
        printf("%d", a[i]);
    printf("\n");
}


