import time
# 要使用JSON标准化输出需要引用json依赖该依赖无需安装,是系统自带的
import json

# 这是步骤1生成的值
step1_value = 1
# 这是步骤2生成的值
step2_value = 2

# 延时3秒
time.sleep(3)

# 拼接好输出的JSON对象
output_json = {
    "step1_value": step1_value,
    "step2_value": step2_value
}

# 打印JSON字符串
print(json.dumps(output_json))
