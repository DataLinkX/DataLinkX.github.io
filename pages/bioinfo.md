---
layout: default
title: Bioinfo
subtitle: Bioinfo in Jiang Lab
permalink: /bioinfo/
---

## Basics for Bioinformatics

### Sequencing Technologies and Their Aims
- Chip-seq: Finding the regions in DNA where a Protein (e.g., TF) binds on
- RNA-seq: Transcriptome Data including sRNA (e.g., miroRNA, siRNA, PiRNA), miRNAs
- Genome Exon Sequencing
- chiRq-seq 
- RIP-seq
- ATAC-seq: measuring openess of chramatin, the peraks are locations where TFs or other regulators bind on

### Someting about Bioconductor
- [Bioconductor Homepage](https://www.bioconductor.org/)
- [Genomic annotation in Bioconductor](http://genomicsclass.github.io/book/pages/bioc1_annoOverview.html): [Summay](http://genomicsclass.github.io/book/pages/bioc1_annoCheat.html)
- Get data from GEO

(```)

    library(GEOquery)
    
    gset <- getGEO("GSE84437", GSEMatrix =TRUE) 
    
(```)

