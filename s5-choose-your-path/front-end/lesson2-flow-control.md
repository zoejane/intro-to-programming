# Lesson 2 - Flow Control
## If Statements
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-13/75526972.jpg)
### Strict equality (===) vs Loose equality (==)

When you use three equal signs, ===, no type conversion is done prior to the comparison. If the values are different types, for example, a String and a Number, they can't ever be equal. To return true, the values must be equal and the types must be the same.  

Loose equality, ==, checks to see if the two values are the same type and if not, converts to a common type before the conversion. If the types are already the same, there is no difference between the result of === and ==. When they aren't it can cause unexpected results.  

Check the [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_when_to_use_them) to an article on Mozilla Developer Network to see what values get converted into what.  

According to Jacques Favreau, the lead front-end engineer at Udacity, you should never use ==. It's a frequent source of bugs. In fact, if a Udacity engineer tries to commit code with ==, it automatically gets rejected.  

Though it wasn't mentioned in the video, the same conditions apply for strict inequality (!==) and loose inequality (!=). Loose inequality is more forgiving than loose equality so you might not see strict inequality as often.