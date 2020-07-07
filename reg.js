app.controller('UserCtrl', function($scope, $http, $window, $filter,
		$location, $timeout) {
	var baseUrl = $location.protocol() + "://" + location.host + u;




   // ===================================================== User Register JS =======================================================

	$scope.BatchStartTime = "06:00";
	$scope.BatchEndTime = "07:00";
	$scope.currentPage = 0;
	$scope.pageSize = 5;
	$scope.search = "";
	$scope.startindex = $scope.currentPage;
	$scope.pages = [5, 10, 20, 50, 100, 500,'All'];
	
	var link = baseUrl+'getAllMemberName';  
	
	$http.get(link).success(function(data, status, headers, config) {
		$scope.getAllMemberNameList = data;
		
	}).error(function(data, status, headers, config) {
		$scope.getAllMemberNameList = "Response Fail";
	});
	
	var link = baseUrl+'getMasterMemberPlanByPage?pagesize='+$scope.pageSize+'&startindex='+$scope.startindex;    
	$http.get(link).success(function(data, status, headers, config) {
		$scope.getAllMemberNameList = data;
	}).error(function(data, status, headers, config) {
		$scope.getAllMemberNameList = "Response Fail";
	});
	
	$scope.changepage = function(){
		if($scope.pageSize != "All"){
			var link = baseUrl+'getMasterMemberPlanByPage?pagesize='+$scope.pageSize+'&startindex='+$scope.startindex;    
			
			$http.get(link).success(function(data, status, headers, config) {
				$scope.getAllMemberNameList = data;
			}).error(function(data, status, headers, config) {
				$scope.getAllMemberNameList = "Response Fail";
			});
			
		}else{
			var link = baseUrl+'getAllMemberName';  
			
			$http.get(link).success(function(data, status, headers, config) {
				$scope.getAllMemberNameList = data;
				
			}).error(function(data, status, headers, config) {
				$scope.getAllMemberNameList = "Response Fail";
			});
			
		}
		
	};
	

//---{1.1}----------------------------------------------------- Add Data In dataBase -----------------------------------------------------------------------
	
	$scope.getAllMemberPlan = function(){
	var link = baseUrl+'getAllMemberName';  
	
	$http.get(link).success(function(data, status, headers, config) {
		$scope.getAllMemberNameList = data;
		
	}).error(function(data, status, headers, config) {
		$scope.getAllMemberNameList = "Response Fail";
	});
	
	};
	
	$scope.masterMemberRegister="";
	$scope.masterMemberRegister.start_date= new Date();
		$scope.addMasterMemberRegister = function(){
			
			

			if (!$scope.masterMemberRegister.plan_id) {			
				$scope.masterMemberRegisterplan_idError = 1;
				$scope.masterMemberRegisterplan_idMsg = "Select Membership Plan";
				document.getElementById("plan_id").focus();	
				
			}
			else if (!$scope.masterMemberRegister.tenure_year) {			
				$scope.masterMemberRegistertenureyear = 1;
				$scope.masterMemberRegisterTenureyearMsg = "Select tenure Year";
				document.getElementById("tenure_year").focus();				
			}
	
			
			else if (!$scope.masterMemberRegister.start_date) {	
				
				$scope.masterMemberRegisterStartdateError = 1;
				$scope.masterMemberRegisterStart_dateMsg = "Date is requried ";
				document.getElementById("fromdatetimepicker").focus();				
			}
			else if (!$scope.masterMemberRegister.end_date) {			
				$scope.masterMemberRegisterEnddateError = 1;
				$scope.masterMemberRegisterMsg = "Date is requried";
				document.getElementById("fromdatetimepicker1").focus();				
			}
			else if (!$scope.masterMemberRegister.member_firstname) {			
				$scope.masterMemberRegistermember_firstnameError = 1;
				$scope.masterMemberRegistermember_firstnameMsg = "Enter First Namet";
				document.getElementById("member_firstname").focus();				
			}
			else if (!$scope.masterMemberRegister.member_middlename) {			
				$scope.masterMemberRegistermember_middlenameError = 1;
				$scope.masterMemberRegistermember_middlenameMsg = "Enter Middle Name";
				document.getElementById("member_middlename").focus();				
			}
			else if (!$scope.masterMemberRegister.member_lastname) {			
				$scope.masterMemberRegistermember_lastnameError = 1;
				$scope.masterMemberRegistermember_lastnameMsg = "Enter Last Name";
				document.getElementById("member_lastname").focus();				
			}
			else if (!$scope.masterMemberRegister.address_line_1) {			
				$scope.masterMemberRegisteraddress_line_1Error = 1;
				$scope.masterMemberRegisteraddress_line_1Msg = "Enter address";
				document.getElementById("address_line_1").focus();				
			}
			else if (!$scope.masterMemberRegister.member_country_id) {			
				$scope.masterMemberRegistermember_country_idError = 1;
				$scope.masterMemberRegistermember_country_idMsg = " Select Country";
				document.getElementById("member_country_id").focus();				
			}
			else if (!$scope.masterMemberRegister.member_state_id) {			
				$scope.masterMemberRegistermember_state_idError = 1;
				$scope.masterMemberRegistermember_state_idMsg = "Select State";
				document.getElementById("member_state_id").focus();				
			}
			else if (!$scope.masterMemberRegister.member_city) {			
				$scope.masterMemberRegistermember_cityError = 1;
				$scope.masterMemberRegistermember_cityMsg = "Enter City Name";
				document.getElementById("member_city").focus();				
			}
			else if (!$scope.masterMemberRegister.pincode) {			
				$scope.masterMemberRegisterpincodeError = 1;
				$scope.masterMemberRegisterpincodeMsg = "Enter pincode";
				document.getElementById("pincode").focus();				
			}
			else if (!$scope.masterMemberRegister.member_mobile_no) {			
				$scope.masterMemberRegistermember_mobile_noError = 1;
				$scope.masterMemberRegistermember_mobile_noMsg = "Enter member mobile no";
				document.getElementById("member_mobile_no").focus();				
			}
			else if (!$scope.masterMemberRegister.member_email) {			
				$scope.masterMemberRegistermember_emailError = 1;
				$scope.masterMemberRegistermember_emailMsg = " Enter Your Email";
				document.getElementById("member_email").focus();				
			}
			else if (!$scope.masterMemberRegister.password) {			
				$scope.masterMemberRegisterpasswordError = 1;
				$scope.masterMemberRegisterpasswordMsg = "Enter Your Password";
				document.getElementById("password").focus();				
			}
			
			
	
			else {
			
			var link = baseUrl+'addMasterMemberRegister';		
			
			$http({url: link, method: "POST", data: $scope.masterMemberRegister}).success(function(data, status, headers, config) {
				$scope.addMasterMemberRegister = data;						
			  openClass('UserDetails','FamilyDetails', 'Paris');
				}).error(function(data, status, headers, config) {
					$scope.addMasterMemberRegister = "Response Fail";
				});
			}

		}
		
		//---{1.0}----------------------------------------------------- SQUEANCE -----------------------------------------------------------------------
		
		$scope.typeschange = function() {
			
			var link = baseUrl + 'getMemberSequenceByType?type_id='+masterMemberRegister.plan_id;			
			$http.get(link).success(function(data, status, headers, config) {
				$scope.getlastmembersequence1 = data;
				
				if($scope.getlastmembersequence1.length == 0) {
					$scope.getLastSequence1 = 0;
				} else {
					$scope.getLastSequence1 = $scope.getlastmembersequence1[0].sequence;
				}			
				
				var familyplan = $scope.familyplan;
				var count =  $scope.getLastSequence1 + 1;
				var typemem = "";
				var family = "";
	//typemem = "RMBF";
				if($scope.membercategoryname == 7){
					typemem="OTHR";
				}
				else{
					typemem="RMBF";
				}
				
				if(count >= 0 && count <= 9) {
					family = typemem + "0000" + count;
					$scope.membershipId = family;
				} else if(count >= 10 && count <= 99) {
					family = typemem+ "000" + count;
					$scope.membershipId = family;
				} else if(count >= 100 && count <= 999) {
					family = typemem+ "00" + count;
					$scope.membershipId = family;
				} else if(count >= 1000 && count <= 9999) {
					family = typemem+ "0" + count;
					$scope.membershipId = family;
				} else if(count >= 10000 && count <= 99999) {
					family = typemem + count;
					$scope.membershipId = family;
				} else {
					$window.alert("Your membership number is not generated");
				}
			}).error(function(data, status, headers, config) {
				$scope.getlastmembersequence1 = "Response Fail";
			});
		}
		
		
//---{1.2}------------------------------------------------------ Set Flag Function ---------------------------------------		
		
		$scope.setflag = function(){
			$scope.masterMemberRegisterplan_idError = 0;
			$scope.masterMemberRegistertenureyear = 0;
			$scope.masterMemberRegisterStartdateError = 0;
			$scope.masterMemberRegisterEnddateError = 0;
			$scope.masterMemberRegistermember_firstnameError = 0;
			$scope.masterMemberRegistermember_middlenameError = 0;
			$scope.masterMemberRegistermember_lastnameError = 0;
			$scope.masterMemberRegisteraddress_line_1Error = 0;
			$scope.masterMemberRegistermember_country_idError = 0;
			$scope.masterMemberRegistermember_state_idError = 0;
			$scope.masterMemberRegistermember_cityError = 0;
			$scope.masterMemberRegisterpincodeError = 0;
			$scope.masterMemberRegistermember_mobile_noError = 0;
			$scope.masterMemberRegistermember_emailError = 0;
			$scope.masterMemberRegisterpasswordError = 0;
		}
		
//--{1.3}---------------------------------------------------------------- Get By ID -----------------------------------------------
		$scope.getMasterPlan = function(plan_id){
			
			var link = baseUrl+'getAllMemberNameById?plan_id='+plan_id;		
			$http.get(link).success(function(data, status, headers, config) {			
				$scope.plan_id=plan_id;
				$scope.masterMemberPlan = data;							
			}).error(function(data, status, headers, config) {
				$scope.getAllMemberName = "Response Fail";
			});
			
		
		};
		
//---{1.4}--------------------------------------------------------------- Edit By Id --------------------------------------------------	
		$scope.editMasterMemberPlan = function(plan_id){
			

			if (!$scope.masterMemberRegister.plan_id) {			
				$scope.masterMemberRegisterplan_idError = 1;
				$scope.masterMemberRegisterplan_idMsg = "Select Membership Plan";
				document.getElementById("plan_id").focus();	
				
			}
			else if (!$scope.masterMemberRegister.tenure_year) {			
				$scope.masterMemberRegistertenureyear = 1;
				$scope.masterMemberRegisterTenureyearMsg = "Select tenure Year";
				document.getElementById("tenure_year").focus();				
			}
	
			
			else if (!$scope.masterMemberRegister.start_date) {	
				
				$scope.masterMemberRegisterStartdateError = 1;
				$scope.masterMemberRegisterStart_dateMsg = "Date is requried ";
				document.getElementById("fromdatetimepicker").focus();				
			}
			else if (!$scope.masterMemberRegister.end_date) {			
				$scope.masterMemberRegisterEnddateError = 1;
				$scope.masterMemberRegisterMsg = "Date is requried";
				document.getElementById("fromdatetimepicker1").focus();				
			}
			else if (!$scope.masterMemberRegister.member_firstname) {			
				$scope.masterMemberRegistermember_firstnameError = 1;
				$scope.masterMemberRegistermember_firstnameMsg = "Enter First Namet";
				document.getElementById("member_firstname").focus();				
			}
			else if (!$scope.masterMemberRegister.member_middlename) {			
				$scope.masterMemberRegistermember_middlenameError = 1;
				$scope.masterMemberRegistermember_middlenameMsg = "Enter Middle Name";
				document.getElementById("member_middlename").focus();				
			}
			else if (!$scope.masterMemberRegister.member_lastname) {			
				$scope.masterMemberRegistermember_lastnameError = 1;
				$scope.masterMemberRegistermember_lastnameMsg = "Enter Last Name";
				document.getElementById("member_lastname").focus();				
			}
			else if (!$scope.masterMemberRegister.address_line_1) {			
				$scope.masterMemberRegisteraddress_line_1Error = 1;
				$scope.masterMemberRegisteraddress_line_1Msg = "Enter address";
				document.getElementById("address_line_1").focus();				
			}
			else if (!$scope.masterMemberRegister.member_country_id) {			
				$scope.masterMemberRegistermember_country_idError = 1;
				$scope.masterMemberRegistermember_country_idMsg = " Select Country";
				document.getElementById("member_country_id").focus();				
			}
			else if (!$scope.masterMemberRegister.member_state_id) {			
				$scope.masterMemberRegistermember_state_idError = 1;
				$scope.masterMemberRegistermember_state_idMsg = "Select State";
				document.getElementById("member_state_id").focus();				
			}
			else if (!$scope.masterMemberRegister.member_city) {			
				$scope.masterMemberRegistermember_cityError = 1;
				$scope.masterMemberRegistermember_cityMsg = "Enter City Name";
				document.getElementById("member_city").focus();				
			}
			else if (!$scope.masterMemberRegister.pincode) {			
				$scope.masterMemberRegisterpincodeError = 1;
				$scope.masterMemberRegisterpincodeMsg = "Enter pincode";
				document.getElementById("pincode").focus();				
			}
			else if (!$scope.masterMemberRegister.member_mobile_no) {			
				$scope.masterMemberRegistermember_mobile_noError = 1;
				$scope.masterMemberRegistermember_mobile_noMsg = "Enter member mobile no";
				document.getElementById("member_mobile_no").focus();				
			}
			else if (!$scope.masterMemberRegister.member_email) {			
				$scope.masterMemberRegistermember_emailError = 1;
				$scope.masterMemberRegistermember_emailMsg = " Enter Your Email";
				document.getElementById("member_email").focus();				
			}
			else if (!$scope.masterMemberRegister.password) {			
				$scope.masterMemberRegisterpasswordError = 1;
				$scope.masterMemberRegisterpasswordMsg = "Enter Your Password";
				document.getElementById("password").focus();				
			}
			
			
	
			else{
			
			var link = baseUrl+'editMasterMemberPlan?plan_id='+plan_id;	
			
			
			$http({url: link, method: "POST", data: $scope.masterMemberPlan}).success(function(data, status, headers, config) {
				$scope.plan_id=plan_id;
				$scope.editMasterMemberPlan = data;			
			  location.reload(true); 
				}).error(function(data, status, headers, config) {
					$scope.editMasterMemberPlan = "Response Fail";
				});
			}
		};
		
//---{1.5}-----------------------------------------------------------Delete By Id ----------------------------------------------------	
		$scope.deleteMasterMemberPlan = function(plan_id) {
			var link = baseUrl+'deleteMasterMemberPlan?plan_id='+plan_id;
			
			$http['delete'](link).success(function(data, status, headers, config) {
				$scope.plan_id=plan_id;
				$scope.deleteMasterMemberPlan = data;			
			  location.reload(true); 
				}).error(function(data, status, headers, config) {
					$scope.deleteMasterMemberPlan = "Response Fail";
				});
		}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 // =[2]===================================================== Family Details JS =======================================================

	$scope.addInsertRow=[];
		$scope.addRow = function() {
			console.log($scope.videoId);
			
			$scope.addInsertRow.push({'FirstName':$scope.FirstName, 'LastName':$scope.LastName, 'Relation1':$scope.Relation1, 'bday':$scope.bday});
			
			$scope.FirstName="";
			$scope.LastName="";
			$scope.Relation1="";
			$scope.bday="";
		};
		
		$scope.masterMemberRegister="";
	
		$scope.addMasterMemberFamilyRegister = function(){
			
			

			if (!$scope.masterMemberRegister.member_family_first_name) {			
				$scope.masterMemberRegistermember_family_first_nameError = 1;
				$scope.masterMemberRegistemember_family_first_nameMsg = " Enter First Name";
				document.getElementById("member_family_first_name").focus();	
				
			}
			else if (!$scope.masterMemberRegister.member_family_middle_name) {			
				$scope.masterMemberRegistermember_family_middle_nameError = 1;
				$scope.masterMemberRegistermember_family_middle_nameMsg = " Enter Middle Name ";
				document.getElementById("member_family_middle_name").focus();				
			}			
			else if (!$scope.masterMemberRegister.member_family_last_name) {				
				$scope.masterMemberRegistermember_family_last_nameError = 1;
				$scope.masterMemberRegistermember_family_last_nameMsg = " Enter Last Name ";
				document.getElementById("member_family_last_name").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_address1) {			
				$scope.masterMemberRegistermember_family_address1Error = 1;
				$scope.masterMemberRegistermember_family_address1Msg = "Enter Your Address";
				document.getElementById("member_family_address1").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_coutry_id) {			
				$scope.masterMemberRegistermember_family_coutry_idError = 1;
				$scope.masterMemberRegistermember_family_coutry_idMsg = "Select Country";
				document.getElementById("member_family_coutry_id").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_state_id) {			
				$scope.masterMemberRegistermember_family_state_idError = 1;
				$scope.masterMemberRegistermember_family_state_idMsg = "Select State";
				document.getElementById("member_family_state_id").focus();				
			}
	
		
		
			else if (!$scope.masterMemberRegister.member_family_city) {			
				$scope.masterMemberRegistermember_family_cityError = 1;
				$scope.masterMemberRegistermember_family_cityMsg = "Enter City Name";
				document.getElementById("member_family_city").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_pincode) {			
				$scope.masterMemberRegistermember_family_pincodeError = 1;
				$scope.masterMemberRegistermember_family_pincodeMsg = "Enter pincode";
				document.getElementById("member_family_pincode").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_type_of_relation) {			
				$scope.masterMemberRegistermember_family_type_of_relationError = 1;
				$scope.masterMemberRegistermember_family_type_of_relationMsg = "Select Relation";
				document.getElementById("member_family_type_of_relation").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_date_of_birth) {			
				$scope.masterMemberRegistermember_family_date_of_birthError = 1;
				$scope.masterMemberRegistermember_family_date_of_birthMsg = " Select Date of birth";
				document.getElementById("fromdatetimepicker3").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_gender) {			
				$scope.masterMemberRegistermember_family_genderError = 1;
				$scope.masterMemberRegistermember_family_genderMsg = "Select Gender";
				document.getElementById("member_family_gender").focus();				
			}
		
			else if (!$scope.masterMemberRegister.member_family_blood_group) {			
				$scope.masterMemberRegistermember_family_blood_groupError = 1;
				$scope.masterMemberRegistermember_family_blood_groupMsg = " Select blood group";
				document.getElementById("member_family_blood_group").focus();				
			}
			
			else if (!$scope.masterMemberRegister.member_family_mobile_no) {			
				$scope.masterMemberRegistermember_family_mobile_noError = 1;
				$scope.masterMemberRegistermember_family_mobile_noMsg = "Enter Your Mobile Number";
				document.getElementById("member_family_mobile_no").focus();				
			}	
			else if (!$scope.masterMemberRegister.member_family_email) {			
				$scope.masterMemberRegistermember_family_emailError = 1;
				$scope.masterMemberRegistermember_family_emailMsg = "Enter Your Email";
				document.getElementById("member_family_email").focus();				
			}
			else if (!$scope.masterMemberRegister.member_family_password) {			
				$scope.masterMemberRegistermember_family_passwordError = 1;
				$scope.masterMemberRegistermember_family_passwordMsg = "Enter Your Password";
				document.getElementById("member_family_password").focus();				
			}
	
			else {
			
			var link = baseUrl+'addMasterMemberFamilyRegister';		
			
			$http({url: link, method: "POST", data: $scope.masterMemberRegister}).success(function(data, status, headers, config) {
				$scope.addMasterMemberFamilyRegister = data;						
			  openClass('UserDetails','FamilyDetails', 'Paris');
				}).error(function(data, status, headers, config) {
					$scope.addMasterMemberFamilyRegister = "Response Fail";
				});
			}

		}
			$scope.setflag = function(){
					$scope.masterMemberRegistermember_family_first_nameError = 0;
					$scope.masterMemberRegistermember_family_middle_nameError = 0;
					$scope.masterMemberRegistermember_family_last_nameError = 0;
					$scope.masterMemberRegistermember_family_address1Error = 0;
					$scope.masterMemberRegistermember_family_coutry_idError = 0;
					$scope.masterMemberRegistermember_family_state_idError = 0;
					$scope.masterMemberRegistermember_family_pincodeError = 0;
					$scope.masterMemberRegistermember_family_cityError = 0;
					$scope.masterMemberRegistermember_family_type_of_relationError = 0;
					$scope.masterMemberRegistermember_family_date_of_birthError = 0;
					$scope.masterMemberRegister.member_family_gender = 0;
					$scope.masterMemberRegistermember_family_blood_groupError = 0;
					$scope.masterMemberRegistermember_family_mobile_noError = 0;
					$scope.masterMemberRegistermember_family_emailError = 0;
					$scope.masterMemberRegistermember_family_passwordError = 0;
			}
		
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 // =[3]===================================================== Personal Information =======================================================
			$scope.masterMemberRegister="";
	
		$scope.addMasterMemberPersonalInfo = function(){
			
			

			if (!$scope.masterMemberRegister.member_profession) {			
				$scope.masterMemberRegistermember_professionError = 1;
				$scope.masterMemberRegistemember_professionMsg = " select profession";
				document.getElementById("member_profession").focus();	
				
			}
			else if (!$scope.masterMemberRegister.member_other_Club_membership) {			
				$scope.masterMemberRegistermember_other_Club_membershipError = 1;
				$scope.masterMemberRegistermember_other_Club_membershipMsg = " Select Other Club Membership ";
				document.getElementById("member_other_Club_membership").focus();				
			}			
			else if (!$scope.masterMemberRegister.member_house_owend) {				
				$scope.masterMemberRegistermember_house_owendError = 1;
				$scope.masterMemberRegistermember_house_owendMsg = " Select House Owend ";
				document.getElementById("member_house_owend").focus();				
			}
			
	
			else {
			
			var link = baseUrl+'addMasterMemberFamilyRegister';		
			
			$http({url: link, method: "POST", data: $scope.masterMemberRegister}).success(function(data, status, headers, config) {
				$scope.addMasterMemberRegister = data;						
			  openClass('UserDetails','FamilyDetails', 'Paris');
				}).error(function(data, status, headers, config) {
					$scope.addMasterMemberRegister = "Response Fail";
				});
			}

		}
			$scope.setflag = function(){
					$scope.masterMemberRegistermember_professionError = 0;
					$scope.masterMemberRegistermember_other_Club_membershipError = 0;
					$scope.masterMemberRegistermember_house_owendError = 0;
				
			}
		
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 // =[4]===================================================== Nominee Information =======================================================
		
			$scope.masterMemberRegister="";
	
		$scope.addMasterMemberNomineeInfo = function(){
			
			

			if (!$scope.masterMemberRegister.nominee_firstname) {			
				$scope.masterMemberRegisternominee_firstnameError = 1;
				$scope.masterMemberRegisternominee_firstnameMsg = " Enter First Name";
				document.getElementById("nominee_firstname").focus();	
				
			}
			else if (!$scope.masterMemberRegister.nominee_middlename) {			
				$scope.masterMemberRegisternominee_middlenameError = 1;
				$scope.masterMemberRegisternominee_middlenameMsg = " Enter Middle Name ";
				document.getElementById("nominee_middlename").focus();				
			}			
			else if (!$scope.masterMemberRegister.nominee_lastname) {				
				$scope.masterMemberRegisternominee_lastnameError = 1;
				$scope.masterMemberRegisternominee_lastnameMsg = " Enter Last Name ";
				document.getElementById("nominee_lastname").focus();				
			}
			else if (!$scope.masterMemberRegister.nominee_address1) {			
				$scope.masterMemberRegisternominee_address1Error = 1;
				$scope.masterMemberRegisternominee_address1Msg = "Enter Your Address";
				document.getElementById("nominee_address1").focus();				
			}
			else if (!$scope.masterMemberRegister.nominee_coutry_id) {			
				$scope.masterMemberRegisternominee_coutry_idError = 1;
				$scope.masterMemberRegisternominee_coutry_idMsg = "Select Country";
				document.getElementById("nominee_coutry_id").focus();				
			}
			else if (!$scope.masterMemberRegister.nominee_state_id) {			
				$scope.masterMemberRegisternominee_state_idError = 1;
				$scope.masterMemberRegisternominee_state_idMsg = "Select State";
				document.getElementById("nominee_state_id").focus();				
			}
	
		
		
			else if (!$scope.masterMemberRegister.nominee_city) {			
				$scope.masterMemberRegisternominee_cityError = 1;
				$scope.masterMemberRegisternominee_cityMsg = "Enter City Name";
				document.getElementById("nominee_city").focus();				
			}
			else if (!$scope.masterMemberRegister.nominee_pincode) {			
				$scope.masterMemberRegisternominee_pincodeError = 1;
				$scope.masterMemberRegisternominee_pincodeMsg = "Enter pincode";
				document.getElementById("nominee_pincode").focus();				
			}

			else if (!$scope.masterMemberRegister.nominee_mobile_no) {			
				$scope.masterMemberRegisternominee_mobile_noError = 1;
				$scope.masterMemberRegisternominee_mobile_noMsg = "Enter Your Mobile Number";
				document.getElementById("nominee_mobile_no").focus();				
			}	
			else if (!$scope.masterMemberRegister.nominee_email) {			
				$scope.masterMemberRegisternominee_emailError = 1;
				$scope.masterMemberRegisternominee_emailMsg = "Enter Your Email";
				document.getElementById("nominee_email").focus();				
			}
			
			else {
			
			var link = baseUrl+'addMasterMemberFamilyRegister';		
			
			$http({url: link, method: "POST", data: $scope.masterMemberRegister}).success(function(data, status, headers, config) {
				$scope.addMasterMemberRegister = data;						
			 openClass('NomineeDetails','PaymentDetails','Bharat');
				}).error(function(data, status, headers, config) {
					$scope.addMasterMemberRegister = "Response Fail";
				});
			}

		}
			$scope.setflag = function(){
					$scope.masterMemberRegistermember_family_first_nameError = 0;
					$scope.masterMemberRegistermember_family_middle_nameError = 0;
					$scope.masterMemberRegistermember_family_last_nameError = 0;
					$scope.masterMemberRegistermember_family_address1Error = 0;
					$scope.masterMemberRegistermember_family_coutry_idError = 0;
					$scope.masterMemberRegistermember_family_state_idError = 0;
					$scope.masterMemberRegistermember_family_pincodeError = 0;
					$scope.masterMemberRegistermember_family_cityError = 0;
					$scope.masterMemberRegistermember_family_type_of_relationError = 0;
					$scope.masterMemberRegistermember_family_date_of_birthError = 0;
					$scope.masterMemberRegister.member_family_gender = 0;
					$scope.masterMemberRegistermember_family_blood_groupError = 0;
					$scope.masterMemberRegistermember_family_mobile_noError = 0;
					$scope.masterMemberRegistermember_family_emailError = 0;
					$scope.masterMemberRegistermember_family_passwordError = 0;
			}
});
