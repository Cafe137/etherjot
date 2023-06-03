const DEFAULT_IMAGE =
    'iVBORw0KGgoAAAANSUhEUgAABQAAAALMCAMAAACMt++EAAAARVBMVEX29/lISEheXl7g4ePs7e+fn6C1tbfS09S/v8GJiYq1trfj5eZTU1PLy810dHSJiopeXl+UlZWpqqt+f3+qqqxpaWmUlZZuKaZYAAAQdklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD255gGYBgIAtgNkRrl+fMthlOHDrEZGAAA+O5Ja3Za66R2Vlp7+r6/v/+9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8LsnrdlprZPaWWnt6fv+/v73/gMv+3NMAwAIwABsBwkE/PtFwy4OWgcFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6baZ2V1tip7ZHWOn3f39//338AAAAAAC67dpiaMBAEYHR3s1GpSaQW73/V9ocUErFhNOhC3zvAwBBYmI8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Kj6WXZpc/VU9gmgaech53zq0qZqf50K0Kzxkn9s/ViN5Tq1rwmgSd2Uf213B4/zqQDtqX2eKYdtkuJiqjsYaM55yEunbov4NyMFAs253qlLffd8/LvVJ7hvn6KOhxRVP1LYR01Rh2N8ffu/ev9uyneU3eP7j39MbWv///7929o/QcSWd+qtMj4f/25d3MFAA5bxLxDtAo+qFAg0Z5zyur7G49+qQQoE3qn7yjPxaBd/VP0VCDRgdqeuKPt4/Fs3uYOBt9gNeVU82i0fVSkQaM445ag+Hv/WlXMCCHhJ/ItHu/2UZ6TAb/bucDdtGAzDqB0TSgsdY1Xv/1b3x5OGt2lJsOFTOecCkCKkR/hVQoBw6vi3wVR6jH+tD+dg4E72U97uXBaOf6ZAIJw6/m12mv83/jkHAyGVc646xqqOfxIIBFbHv5t9ln+Of87BQEiHKfdyLs3418VFAoEq1vh3bZr/HP+cg4GQdufc2bSv419X0yEBRBz/rn3MeYBzAgg5/l0p+xEfnABijn+/K6lccmcCCHSzu+RhSkqpvOauBBAIPf79UgYcsAUQ6ON9yiOV5uniHgQQiD3+NQHsOQUKIBB7/GsC2HMKFEDgZvMpD1cG3GsjgEDs8a8JYM8pUACBm7wMHv/aAPacAgUQiD3+NQHsOQUKILDdj1O+lzLgsTsBBGKPf00Ae06BAghsU77leyrpr8qctxNAIPb41wSw5xQogEDs8a8qA47iAgjEHv+qMuD1wwIIxB7/mgD2nAIFEFhlN+eHKKnqOAUKIBB7/KvKgIO5AALLvX/mMVYEsOMUKIBA7PGvCWDPKVAAgQj/eL8igP2mQAEEYo9/VRlwj44AAkvM+cFKWux7XkgAgSVe8xACyCO9pLWOh7TW7i2t9rZLax2O6y/f9X+dAB6OGwLo+3/q60/wVQLoFyBQCeACAggIIIAAAggggAACCCDwtAQQeFoCCDwtAQSelgACT+sne3eg0jAMhWE0N926uXU1OvH9H1VQYaK4tVrQJue8QRl80J8lFUCgWQIINEsAgWYJINCsPw/gTgCBiaoL4EkAgYkEcAIBBAQQQAABBBDg/wRwL4DARNUFMPfLB3D0XURgDQGMyLtlA5hPCWAdAYy475YL4LDdJIDVBDBiu1QAn+UPWFkAI/dLBHD09gusL4ARufttAPM+AawxgLenwGL8A2oNYAzbnwfwrksA6w3gjSmwGP+AigMYMXbzAzj0CWD9AbwyBRbjH1B5ACM/zgng2fgH1BPA76bAYvwD6g9gxLmbEsDhKQHUFsDLFHglgMY/oM4ARu6vB3A0/gG1BvDL2bbi0iugmQB+eg8uxj+goQBGPFwSWFx6BTQVwA9TYHHjPdBWAC9zXzH+Mc0uzXXcp7k2hzTbYZPm2h/nP77nrymAr1PgewCHrd/f89/gDYG6Avj2l79i/ANaDGDkPhXn3oAmA+jGe6DhAIaTH4AAAggggAACCCCAAAIIIIAAAggggAACbRNAoFkCCC/s2F0KglAUhdFj2b8FUfMfa89RRBcs1L3WDA7Ch3cTSwCBWAIIxBJAIJYAArEEEIglgEAsAQRiCSAQSwCBWAIIxBJAIJYAArEEEIglgEAsAQRiCSAQSwCBWAIIxBJAIJYAArEEEIglgEAsAQRiCSAQSwCBWAIIxBJAIJYAskC7anXaV6v+WM2OfbXan9rPd390AH3/8PsLggMIIIAAAggggAACCCCAQCwBBGJdu9kY+gIY03bVzcPBDyAwuk03A5dzAYxvPfkhcNgWwG+sJ/0OHjbWP+BJzBR4M/4BrxKmQOMf8N7ip0DjH/Anu4m9g41/wGfLnQIvxj/gn/rJTIHGP+AbC5wCh3vxYO8OcBuFgQCKesaQ0BQbJVn2/ket1EpVqdqUwQQG+O8AkVCkkf3jGADLS6vvg4l/ACz2lAKJfwBWFGtZTU/8A2C1jxRI/APgwCopkPgHwIcRKZD4B2Cn4lUWpMQ/AJ48SoHEPwA716gs4T/xD4BDP6ZA4h+A7Ym5i872wfb412TuyQIw6bKDtvaUAu3xL2UR0SYAgMGtlXd6crMPNse/qpMPHftmAKOlXj710cUIzGfzEraVT1dGIIBRYpYBBylQU+Fv0koKBDDpplO1p8C7zMieIlPm9DSAKfFvwEEKnBL/BkiBAEwrp/IDeP909hvv7fFvqGYEAhgZ/xykQE2ld9OQAgHYV04OUqD9xvuUuUgBQHH8c5AC7fHvKgOkQACmldNj9xiManUQ/7hMFcDY+OcgBWpTGv9IgQDGrZwM9Gafr8+Pf+csFnoOQDgHq9cmWFWXYHapglXzan98nj+EUytGejI+vzUFvlSXyhr/rLrI93/45w84upHxrzwFtob4Z/9w3qsEoPScioMUWB7/SIEASuPf/CmwdxD/SIEAgiH+LXgq8CXOevKPU4EADPHPpps3BeZUfnrbrg4AjiV2MuAgBeqpNP6RAgEY4t8a0yPqPPEvZpmLsg8GDuN7inOQAu+l8Y8UCKAg/i2aAj3EP1IgcDQf8W/1Efg1BbbF8Y8UCGB8/HMwPaI6iH+kQOA4GpWn0WZSCrzH4pc2kQIBWOPf+tOjqj3Ev4GWFAjsUdXJkyz4/vHUy49IgQCs8W9j0yNmWULPPhjYFUP8Wy4Feop/pEBgrx7Gv61Mj7/iHykQgOE/E8Uevn98c/GPFAjszpj45356xCzLy+yDgY1LKqvQtPEZTgoEts4Q//xOj1sra1FSILBVE+KfvxRon+GuN/MAfrX5+PfGvh2kKAxEURTNT2IURaSV3v9We9jUwEFw4H96zg4KwiX1oEbzFjn+mQIh3XWuBuZreMNNgZDn+P4/p9frsbXInykQsqw/1chhTRz/TIGQqcfF8bV6LI/q5eEeDAF6jH+j+Rg5/pkCIUuf8W90WxLHv9F8n4C+eo1/o8OaOP6ZAiHFveef0656LLfqzBQIPXUc/0bzEjn+mQKhuwZvJl6vx9a+4aZA6Kfz+Dc6RI5/pkBorP3F8d/v9MSpciggNFI55umJrXJ4GweNVA4BBARQAAEBFEBAAHMIIDRSOQQQEEABBARQAHmX47TX5TTttZ6n3c7rtNfpsv/4n3L+yvF9AfT9tz3/xGeoHN8XQGAkgAIICKAAAgIogIAABhBAaKRyCCAggAIICKAAAgKYQwChkcohgIAACiAggAIICGAOAYRGKocAAgIogIAACiAggDkEEBqpHAIICKAAAgIogIAA5hBAaKRyCCAggAIICKAAAgKYQwChkcohgPDHTh2cMAxEMRRcgSHG7r/fnHPcU77smQ4E4iGAAggIoAACAthDAGGQ9BBAQAAFEBBAAQQEsIcAwiDpIYCAAAogIIACCAhgDwGEQdJDAAEBFEBAAAUQEMAeAgiDpIcAAgIogPzdZ+26z7XruNa261i7znt//lP2p8f7Auj/Y/cvniE93hdA4JcACiAggAIICKAAAgJYQABhkPQQQEAABRAQQAEEBLCHAMIg6SGAgAAKICCAAggIYA8BhEHSQwABARRAQAAFEBDAHgIIg6SHAAICKICAAAogIIA9BBAGSQ8BBARQAAEBFEBAAHsIIAySHgIICKAAAgIogIAA9hBAGCQ9BPDL3h3lphEEQQCd2WFhsZeVHEPuf9QofyEWmEW26R7eu8FIqFRdAgEIQAEICEABCAjAPAQgBFLzEICAABSAgAAUgIAAzEMAQiA1DwEICEABCAhAAQgIwDwEIARS8xCAgAAUgDzcrqz1OpW1Ni9ltZdNWWt6Xf/8Xt5f83i+APT5D/v+Qh/mmsapXDDVPH4VIIy2rznM46ZcMg01h+FQgEjaqSawtHLNNkME/s1wIJj46bF82pzaW43ut/iDkMbQU+B87OCYX1y/EFXk9Pj/cMw4BQ5TAeJqQdNjafmPeeMfhBcxPU6HDprsXvxBAmONZT52cMwb/yCJWOkxbvI3WeMfJBJnClxa/mPe+AfJxEiP4dBBk923AuSyefwUOB87OOaNf5DSXekR7TcTD26yw7YAOe3WpUeU8e/ccd0jjH/AHQUqzvgXpMka/yC5W6fAYOPfufZeb2T8A9YXqHDj34Ob7Gz8gz787BS47MqZjFOg8Q86cr1ARR3/HtZk341/0JM21p8wj+UbtaVeYPwD7ihQ0ce/25qs8Q+47jDUDxKMf+fGj48w/gF3FKgc499nTTbit7eBeP6ZAvM2p7Mp0PgHrC9Quca/S0028Le3gYCmoeZvTuNca9oKC6wRukDdPP5FbrLGP3ga7a2D5tROmSsssEbMArVu/IvZZI1/8HSmoYPm9BVToPEPntF2yP9XaW1v/APuS4+U498X/gHe6VCAZ/WHvXtJbRiGwjBqJD/ixPUkdP9bLR1eSoulZqAbztmBCPzgD8fqn8B9jPn7thbxD+hbj5TxL1rEP6BzAjPGv6ju4h/Qtx4p419US4K3t4EB1f0Nrkpbi/gH9K1HyvgXLRne3gYGdOXSoTL415LrLv4BfeuRMv5FWxH/gB71mTL+RWsR/4C+9UgZ/4J5Ef+4aJtaPW5Tq/k+NbvPU6vbo/34zn8tBR5rpvP/8jB/bn5/54/zBz9SYMr4F21F/ANecenQM0f8+/Nh/lgmgGvrkTH+RXUR/4B/3T9+DP7m36WH+VPrAdrWI2X8iz6K+Af0qOcb/Gdi/Uy+4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/szzENACAAA7AdJBDw7xcBXLtpHRQAAAAAAACA10zrrLTGTm2PtNbp+/7+/v/+AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXPbn2AZgEAgC2BVIQfz++2aGqyiwNzAAAFz3pTU7rXVSOyutPX3f39//3X8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjuS2t2WuukdlZae/q+v7//u/8AP3twIAAAAAAA5P/aCKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqslEwCkYB9QAAA6F8SWpAJW8AAAAASUVORK5CYII='

export function createDefaultImage(): Buffer {
    return Buffer.from(DEFAULT_IMAGE, 'base64')
}
