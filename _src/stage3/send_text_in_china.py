
import leancloud

leancloud.init('yw8SJE9vsH2fw2Gs5Afgg6oB-gzGzoHsz', 'ImBmGwIPfhbtu8JRnJJKel4D')


from leancloud import Object
from leancloud import LeanCloudError

TestObject = Object.extend('TestObject')
test_object = TestObject()
test_object.set('foo', 'bar')
try:
    test_object.save()
except LeanCloudError, e:
    print e

