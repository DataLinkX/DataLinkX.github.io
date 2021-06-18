---
layout: default
title: Stanford
permalink: /standford
---

#### Thinking at Stanford

*One should do something special to show his/her contribution to the scientific community, since people will evaluate you based on your works.*

*The rule for mathematical/statistical modeling*. We always learn the world approximately, no one know what exactly is the rule underlying the system except the cases where we design it. So, when understand the phenomenon through modeling, do not be too rigorous/restrictive. The model should be mathematically tractable and the assumptions should be reasonable. So, reasonable assumptions => modeling, not too ideal, or, it is impossible to propose a model.  The way to verify the model is to see whether the model explains the data in a reasonable way, i.e, does the model give some reasonable explanations on the phenomenon consistent with known facts. This is the rule for mathematical/statistical modeling. Simple models explain a lot! Just follow the background knowledge! 

*Researches on real Problems*. Methods are used for finding something new.  In other words, if you find something interesting, the method can be not so rigorous. 
 The goal of **application research** is to provide new findings by new/old methods. However, The goal of **theoretical research** is to provide better understanding on the behavior of the method.  The theory is interesting if your results gives fundamental view on the method, usually, rate of convergence. Since computational cost is a main concern in statistics. 
 
#### Something about Lasso
Lasso, a simple and efficient algorithm for variable selection in statistical applications, is a very fruitful research area.  To sum up, there are seven main research area stimulated by Lasso, i.e, a simple paper leads to 7 different and meaningful research direction. If you find them and do some work, you will be famous.
- Extending the idea behind Lasso: Penalized likelihood leads to sparsity of estimated coefficients. SCAD, adaptive Lasso, graphical Lasso, MCP and sparse PCA are in this category. Sparsity is a special structure of the coefficients, 0 is a special number. So Lasso can be used to estimate structure identification: Group Lasso (GLM group lasso), penalized additive model, fused Lasso.
- Computational algorithm of Lasso: LARS, coordinate decent algorithm, QM algorithm. SCAD has good model selection property (consistency) but it is hard to be solved, which leads to MM algorithm for model selection, and onestep algorithm.
- Theoretical basis of Lasso: Why Lasso works? When Lasso works? Try to answer this question from the view of model selection consistency, generalized error control (Note that these are criteria for measuring the output of Lasso, i.e, the performance of any algorithm is measured based on some meaningful criteria)
- The Tuning-parameter of Lasso: The tuning-parameter plays a key role in Lasso and is very critical in real applications. Usually, people selects this parameter based on some model selection criteria such as AIC, BIC, Cp, GCV, CV. What is the quality of the results from difference criteria?? (over-fitting or under-fitting) Measure it? => model selection consistency? The idea is, define a the true error function, and the minimum error of over-fitting and under-fitting are larger than the true one with probability 1. Interestingly, GCV equals to AIC. Can we avoid the selection of this parameter? => stability selection.
- The solution of Lasso (statistical Inference): Bias? Variance? Confidence Interval? Degree of freedom? Parameter estimation.
-	The solution of Lasso (algorithm): does the solution unique? what has a  strong effect on the solution? When the condition changed, what is the solution of Lasso (n<<p, how many variables will be selected using Lasso). If there are two correlated variables, will they both be selected by Lasso? Attention: We should suspect that the algorithm may not have the very simple property. 
-	How to do variable selection, when the assumption of Lasso is invalid.=> sure independent screening.
 
In other words, we should suspect on each sentence, condition in the paper. Lasso opened a new research area of model selection. In the very beginning, we should pay attention on the general property that a model selection procedure should have, and try to give definitions and solutions (SCAD). Sometimes, the common sense is a big mistake.

