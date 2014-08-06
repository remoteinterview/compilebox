#include <Foundation/Foundation.h>


int main ()
{
	NSString *greeting = @"Hello";
	NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys: nil];
	NSArray *array = [NSArray arrayWithObjects: [NSNumber numberWithInt: 0], nil];

	NSLog(@"Yo mama --> %@", [array objectAtIndex:0]);


	NSLog(@"Greeting message: %@\n", greeting );

	return 0;
}
