---
layout: default
title: People
subtitle: People in Jiang Lab
permalink: /people
---

<h1>People</h1>
<h3>Current lab members</h3>

    <h4>Principle Investigator</h4>
        <ul>
            <li><a href="/people/shirley_liu">Hangjin Jiang, PhD</a>&nbsp;(Principle Investigator)</li>
        </ul>

    <h4>Students</h4>
        <ul>
            {% for people in site.people %}
            {% if people.status == "Student" %}
            <li><a href="{{people.permalink}}">{{people.pname}}</a>&nbsp;({{people.position}})</li>
            {% endif %}
            {% endfor %}
        </ul>

<h4>PhD Students and current status</h4>
<ul>
    <li><a href="https://www.linkedin.com/in/chen-hao-chen-1993095a">Chen-hao Chen, PhD.</a> (2012-2020) Senior Computational Statistician, WuXi NextCODE, Cambridge, MA</li>
</ul>

<h4>Other students and current status</h4>
<ul>
    <li><a href="http://www.childrenshospital.org/research/researchers/m/arjun-manrai">Raj Manrai, undergraduate researcher</a> (2007-2009) Assistant Professor, Harvard Medical School, Boston, MA</li>
    <li><a href="https://openwetware.org/wiki/User:Ying_Lei">Lei Ying, undergraduate researcher</a> (2007-2008) PhD student, Stanford University, CA</li>
</ul>

<h3>Alumni</h3>
<h4>Postdoc Fellows and Current Status</h4>
<ul>
    <li>Chenfei Wang, Ph.D. (2018-2020) Professor, Department of Bioinformatics, Tongji University, Shanghai, China</li>
    <li><a href="https://www.linkedin.com/in/qin-tang-13416034/">Qin Tang, PhD.</a>（2017-2019） Postdoctoral Research Associate, Salk Institute, Dr. Ron Evans lab, La Jolla, CA</li>
</ul>
