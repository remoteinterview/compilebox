
#include <Foundation/Foundation.h>

@interface Test
+ (const char *) classStringValue;
@end

@implementation Test
+ (const char *) classStringValue;
{
    return "This is the string value of the Test class";
}
@end

int main(void)
{


BOOL condition = NO;
if(condition){
    printf("%s\n", [Test classStringValue]);
}
else{
	printf("BLEKH");
}
    return 0;
}
