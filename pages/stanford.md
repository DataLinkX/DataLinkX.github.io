---
layout: default
title: Stanford
permalink: /standford
---

#### Thinking at Stanford

Methods are used for finding something new.  In other words, if you find something interesting, the method can be not so rigorous. 
 
The goal of application research is to provide new methods for new applications/new findings. So the method is validated through your findings.
 
The goal of theoretical research is to provide better understanding on the behavior of the method.  The theory is interesting if your results gives fundamental view on the method, usually, rate of convergence. Since computation cost is a main concern in statistics. 
 
Wing’s interests are 1) statistical modeling to understand the phenomenon; 2) rate of convergence of the MCMC algorithm; 3) computational methods for bayesian inference ( including density estimation, parameter estimation in the model ). 
 
I should do something special to show my own contribution to the scientific community, since people will evaluate you based on your works.
 
I should read many more papers to cultivate my own intuition on possible solutions to research problems.  The style of wing’s research is to propose a general method and apply it to some real examples. That’s interesting. However, his early works were not so general.  When he was a AP, he also focus on simple but meaningful problems to have many papers to be published. Now, he is not interested in this kind of work any more. I do not know whether it is good for me or not to be a Postdoc here for about two years. Maybe I should discuss with Prof. Fan for further suggestions. 
 
For application, you should only pay attention on the results, if you get the good results ( high performance/ higher accuracy on prediction/ higher accuracy on classification etc.) then it is a good method.
 
For theoretical research, you should pay attention on the proof. You should prove the rate of convergence/ convergence of the algorithm. You should provide a better understanding on how the algorithm works. That’s the core of theoretical works. 
 
From Lasso to statistical research.
Lasso, a simple and efficient algorithm for variable selection in statistical applications, is a very fruitful research area.  To sum up, there are seven main research area stimulated by Lasso, i.e, a simple paper leads to 7 different and meaningful research direction. If you find them and do some work, you will be famous.
1.	Extending the idea behind Lasso: Penalized likelihood leads to sparsity of estimated coefficients. SCAD, adaptive Lasso, graphical Lasso, MCP and sparse PCA are in this category. Sparsity is a special structure of the coefficients, 0 is a special number. So Lasso can be used to estimate structure identification: Group Lasso (GLM group lasso), penalized additive model, fused Lasso.
2.	Computational algorithm of Lasso: LARS, coordinate decent algorithm, QM algorithm. SCAD has good model selection property (consistency) but it is hard to be solved, which leads to MM algorithm for model selection, and onestep algorithm.
3.	Theoretical basis of Lasso: Why Lasso works? When Lasso works? Try to answer this question from the view of model selection consistency, generalized error control (Note that these are criteria for measuring the output of Lasso, i.e, the performance of any algorithm is measured based on some meaningful criteria)
4.	The Tuning-parameter of Lasso: The tuning-parameter plays a key role in Lasso and is very critical in real applications. Usually, people selects this parameter based on some model selection criteria such as AIC, BIC, Cp, GCV, CV. What is the quality of the results from difference criteria?? (over-fitting or under-fitting) Measure it? => model selection consistency? The idea is, define a the true error function, and the minimum error of over-fitting and under-fitting are larger than the true one with probability 1. Interestingly, GCV equals to AIC. Can we avoid the selection of this parameter? => stability selection.
5.	The solution of Lasso (statistical Inference): Bias? Variance? Confidence Interval? Degree of freedom? Parameter estimation.
6.	The solution of Lasso (algorithm): does the solution unique? what has a  strong effect on the solution? When the condition changed, what is the solution of Lasso (n<<p, how many variables will be selected using Lasso). If there are two correlated variables, will they both be selected by Lasso? Attention: We should suspect that the algorithm may not have the very simple property. 
7.	How to do variable selection, when the assumption of Lasso is invalid.=> sure independent screening.
 
In other words, we should suspect on each sentence, condition in the paper. Lasso opened a new research area of model selection. In the very beginning, we should pay attention on the general property that a model selection procedure should have, and try to give definitions and solutions (SCAD). Sometimes, the common sense is a big mistake.

