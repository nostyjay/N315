var obj = {
	Students: [
		{
			key: 'value',
			firstName: 'Todd',
			lastName: 'Shelton',
			grades: [
				{
					className: 'n315',
					grade: 'B'
				},
				{
					className: 'n215',
					grade: 'D'
				}
			]
		},
		{
			key: 'value',
			firstName: 'Tom',
      lastName: 'Shel',
      grades: [
				{
					className: 'n315',
					grade: 'A'
				},
				{
					className: 'n215',
					grade: 'C'
        },
        {
          className: 'i210',
          grade: 'A'
        },
        {
          className: 'n423',
          grade: 'F'
        }
			]
		}
	]
};

function init() {
  $('.getData').click((e) => {
    // for(let i = 0; i < obj.Students.length; i++){
    //   console.log(obj.Students[i]);
    // }

    $.each(obj.Students, (idx, student) =>{
        console.log(student.firstName);

        $.each(student.grades, (idx, grades) =>{
          console.log(grades.className + " " + grades.grade);
      })
    })
  })
	$('.navicon').click(function(e) {
		$('nav').toggleClass('navMobileView');
		$('.links').toggle();
	});
}
$(document).ready(init());
