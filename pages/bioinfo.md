---
layout: default
title: Bioinfo
subtitle: Bioinfo in Jiang Lab
permalink: /bioinfo/
---

## Basics for Bioinformatics
### Some Concepts ([More](https://zhuanlan.zhihu.com/p/262198184)):
- **表观遗传学**: 是指基于非基因序列改变所致基因表达水平的变化，例如：DNA甲基化、组蛋白修饰、染色体重塑和非编码RNA调控等等，主要是通过对基因转录或翻译过程的调控，影响其功能和特性。
- **染色质**：是由DNA缠绕着核小体构成。
- **核小体**：核小体是由H3、H4、H2A和H2B四种组蛋白构成的八聚物，每个核小体上大约含有146bp的DNA。染色质分为常染色质和异染色质，在结构上常染色质折叠压缩程度低，处于伸展状态。
- **开放染色质**：DNA复制和基因转录时，DNA的致密高级结构变为松散状态，这部分无核小体包裹的裸露DNA区域被称为开放染色质性。
- **染色质可进入性**：染色质一旦被打开，就允许一些调控蛋白，比如转录因子和辅因子与之相结合，染色质的这种特性叫做染色质的可进入性也叫可及性。

### [Application of NGS to Epigenetics](https://zhuanlan.zhihu.com/p/289427789)
- [全基因组测序与覆盖深度](https://zhuanlan.zhihu.com/p/128738355)
    - Coverage ratio (覆盖比率，亦简称覆盖率，亦称基因组覆盖率): 指被测序到的碱基占全基因组大小的比率。
    - Coverage depth (覆盖深度，亦称测序深度，或者碱基平均测序深度):指每个碱基被测序的平均次数。即测序的数据总量比基因组大小: 测序所得的碱基总数(raw data or clean data)/基因组大小
- **转录组测序** (<font color=blue>RNA-seq</font>) includes mRNA, sRNA, microRNA, LncRNA, etc.
- **蛋白质与DNA相互作用** (<font color=blue>Chi-seq and CUT&Tag</font>): 测得的数据越大相应的区域可能蛋白质的结合位点
    - **Chip-seq**: 明确特定的蛋白（如转录因子: motif搜索转录因子）是否结合特定基因组区域（如启动子或其它DNA结合位点)
    - 它还被用来确定基因组上与组蛋白修饰相关的特定位点（即组蛋白修饰酶类的靶标）
    - **CUT&Tag**: CUT&Tag是蛋白质-DNA互作关系研究的新方法, 用于弥补Chip-seq的不足。
- **染色质可及性** (<font color=blue>MNase-seq, DNase-seq, FAIRE-seq and </font>[ATAC-seq](https://www.zhihu.com/question/263776928/answer/273229159)): 测得的数据越大相应的区域可能转录因子的结合位点
    - ATAC-seq: 用于研究某个基因的上下游调控机制, 思路: 从reads peak找motif，从motif确定转录因子，结合chip-seq看转录因子的作用位点 (ATAC-seq从来都不是用来单组学的分析的，经常需要结合RNA-seq、chip-seq等多组学进行分析)。
    - MNase-Seq: 鉴定核小体区域
    - DNase-Seq: 识别开放染色质区域
    - 染色体开放性图谱绘制, 胚胎发育表观遗传修饰, 疾病潜在标志物的预测, 肿瘤发生表观机制研究, 肿瘤分型与微环境研究
- **甲基化测序数据** (<font color=blue>WGBS, RRBS and MeDIP-Seq</font>): 测得的数据是甲基化水平。
    - 用于分析CpG Island. DNA甲基化在维持正常的细胞功能、雌性个体的X染色体失活、寄生DNA序列抑制、基因组结构的稳定、遗传印记、胚胎发育、肿瘤和疾病的发生具有重要功能
    - WGBS具有单个碱基分辨率，研究的是全基因组甲基化，可以针对小样本但是价格贵。
    - RRBS主要关注CpG富集区域的甲基化，在大规模的临床样本的研究中具有广泛的应用前景。
    - 主要是高CpG密度、高DNA甲基化水平区域，和RRBS相似，适用于大样本量的甲基化研究。与WGBS和RRBS不同的是，MeDIP-Seq检测的甲基化图谱不能精确到单个碱基位点。
- **染色体结构测序** (<font color=blue>Hi-C</font>): 测得的数据是相互作用矩阵, 表明染色体各个区间段的相互作用强度。
    - 研究全基因组范围内整个染色质DNA在空间位置上的关系，获得高分辨率的染色质调控元件相互作用图谱。
    - 研究染色体片段之间的相互作用，建立基因组折叠模型
    - 应用于基因组组装、单体型图谱构建、辅助宏基因组组装等
    - 与RNA-Seq、ChIP-Seq等数据进行联合分析，从基因调控网络和表观遗传网络来阐述生物体性状形成的相关机制。
    
### Regulatory Elements
- **启动子 Promoter**: 与RNA聚合酶结合并能起始mRNA合成的序列。一般选择CDS区上游2k bp, 下游100bp.
    - Example: [Predicting TFBS for a Given TF on Promoter](https://zhuanlan.zhihu.com/p/73237158)
- **如何寻找Enhancer** (Data Sets: EnhancerAtlas (人), VISTA Enhancer Browser (人和鼠), HACER(人))
    - 使用一些组蛋白的修饰来定义enhancer. 比如H3K4me1是enhancer (poised)的标志, 如果同时出现H3K27ac则认为是活跃的enhancer (activated),如果同时出现H3K27me3则认为是抑制的enhancer (repressed);
    - 使用p300来确定active enhancer;
    - 使用染色质的开放程度来寻找潜在的enhancer. 因为活跃的enhancer上面需要结合特异性转录因子,所以一般是处于开放的状态,使用faire-seq,DNase-seq,或者现在使用最多的ATAC-seq来找到开放的区域,然后再根据注释到基因的距离来界定promoter和enhancer (更多称为distal regulatory element), 当然这种的方法只能找到正在活跃的enhancer;
    - 使用染色质三级结构捕获的技术 (3C, 4C, 5C, Hi-C, capture HiC, ChIA-PET, Hi-ChIP)之类的技术直接获得enhancer-promoter interaction, 当然这种技术难度比较大,花费也多,现在数据很少;
    - 近年也有人用enhancer RNA (eRNA)来找enhancer,但是关于其争议比较多, 见到的应用不多;
- **转录因子** (<font color=blue>TF</font>), [Review Paper](https://www.sciencedirect.com/science/article/pii/S0092867418301065)
    - 是一类序列特异性DNA结合蛋白，能够结合在靶基因上游的转录因子结合位点序列（Transcription factor binding site, TFBS）上。
    - 转录因子在基因组结合位点不固定，允许错配 
    - TFBS 通常为一段6~12bp的DNA序列，最多不超过20bp, 用(Weblogo或位置频率矩阵表示
    - Datasets: [JASPAR](http://jaspar.genereg.net/), [More](https://zhuanlan.zhihu.com/p/343884679)
    - Example: [Predicting TFs from Promoter Squence](https://zhuanlan.zhihu.com/p/65606384) 
    
### Someting about Bioconductor
- [Bioconductor Homepage](https://www.bioconductor.org/)
- [Genomic annotation in Bioconductor](http://genomicsclass.github.io/book/pages/bioc1_annoOverview.html): [Summay](http://genomicsclass.github.io/book/pages/bioc1_annoCheat.html)
- Get data from GEO (**code**: library(GEOquery); gset <- getGEO("GSE84437", GSEMatrix =TRUE);)

