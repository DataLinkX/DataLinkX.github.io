---
layout: default
title: Bioinfo
subtitle: Bioinfo in Jiang Lab
permalink: /bioinfo/
---

## Basics for Bioinformatics

- [Application of NGS to Epigenetics](https://zhuanlan.zhihu.com/p/289427789)
    - Some Concepts:
        - 染色质：是由DNA缠绕着核小体构成。
        - 核小体：核小体是由H3、H4、H2A和H2B四种组蛋白构成的八聚物，每个核小体上大约含有146bp的DNA。染色质分为常染色质和异染色质，在结构上常染色质折叠压缩程度低，处于伸展状态。
        - 开放染色质：DNA复制和基因转录时，DNA的致密高级结构变为松散状态，这部分无核小体包裹的裸露DNA区域被称为开放染色质。
        - 染色质可进入性：染色质一旦被打开，就允许一些调控蛋白，比如转录因子和辅因子与之相结合，染色质的这种特性叫做染色质的可进入性也叫可及性。
    - RNA-seq: 转录组测序, includes mRNA, sRNA, microRNA, LncRNA, etc
    - Chip-seq:用来研究细胞内蛋白质与DNA相互作用, 具体来说就是明确特定的蛋白（如转录因子: motif搜索转录因子）是否结合特定基因组区域（如启动子或其它DNA结合位点)。它还被用来确定基因组上与组蛋白修饰相关的特定位点（即组蛋白修饰酶类的靶标）。
    - CUT&Tag: CUT&Tag是蛋白质-DNA互作关系研究的新方法, 用于弥补Chip-seq的不足。
    - MNase-seq, DNase-seq, FAIRE-seq and [ATAC-seq](https://www.zhihu.com/question/263776928/answer/273229159): 研究染色质可及性的方法。Applications: 染色体开放性图谱绘制, 胚胎发育表观遗传修饰, 疾病潜在标志物的预测, 肿瘤发生表观机制研究, 肿瘤分型与微环境研究
        - ATAC-seq: 用于研究某个基因的上下游调控机制, 思路: 从reads peak找motif，从motif确定转录因子，结合chip-seq看转录因子的作用位点 (ATAC-seq从来都不是用来单组学的分析的，经常需要结合RNA-seq、chip-seq等多组学进行分析)。
        - MNase-Seq: 鉴定核小体区域
        - DNase-Seq: 识别开放染色质区域
    - WGBS, RRBS MeDIP-Seq: 甲基化测序数据，用于分析CpG Island. DNA甲基化在维持正常的细胞功能、雌性个体的X染色体失活、寄生DNA序列抑制、基因组结构的稳定、遗传印记、胚胎发育、肿瘤和疾病的发生具有重要功能。
        - WGBS具有单个碱基分辨率，研究的是全基因组甲基化，可以针对小样本但是价格贵。
        - RRBS主要关注CpG富集区域的甲基化，在大规模的临床样本的研究中具有广泛的应用前景。
        - 主要是高CpG密度、高DNA甲基化水平区域，和RRBS相似，适用于大样本量的甲基化研究。与WGBS和RRBS不同的是，MeDIP-Seq检测的甲基化图谱不能精确到单个碱基位点。
- Someting about Bioconductor
    - [Bioconductor Homepage](https://www.bioconductor.org/)
    - [Genomic annotation in Bioconductor](http://genomicsclass.github.io/book/pages/bioc1_annoOverview.html): [Summay](http://genomicsclass.github.io/book/pages/bioc1_annoCheat.html)
    - Get data from GEO (**code**: library(GEOquery); gset <- getGEO("GSE84437", GSEMatrix =TRUE);)

