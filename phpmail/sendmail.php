<?php

	/**
	 * ×¢£º±¾ÓÊ¼þÀà¶¼ÊÇ¾­¹ýÎÒ²âÊÔ³É¹¦ÁËµÄ£¬Èç¹û´ó¼Ò·¢ËÍÓÊ¼þµÄÊ±ºòÓöµ½ÁËÊ§°ÜµÄÎÊÌâ£¬Çë´ÓÒÔÏÂ¼¸µãÅÅ²é£º
	 * 1. ÓÃ»§ÃûºÍÃÜÂëÊÇ·ñÕýÈ·£»
	 * 2. ¼ì²éÓÊÏäÉèÖÃÊÇ·ñÆôÓÃÁËsmtp·þÎñ£»
	 * 3. ÊÇ·ñÊÇphp»·¾³µÄÎÊÌâµ¼ÖÂ£»
	 * 4. ½«26ÐÐµÄ$smtp->debug = false¸ÄÎªtrue£¬¿ÉÒÔÏÔÊ¾´íÎóÐÅÏ¢£¬È»ºó¿ÉÒÔ¸´ÖÆ±¨´íÐÅÏ¢µ½ÍøÉÏËÑÒ»ÏÂ´íÎóµÄÔ­Òò£»
	 * 5. Èç¹û»¹ÊÇ²»ÄÜ½â¾ö£¬¿ÉÒÔ·ÃÎÊ£ºhttp://www.daixiaorui.com/read/16.html#viewpl 
	 *    ÏÂÃæµÄÆÀÂÛÖÐ£¬¿ÉÄÜÓÐÄãÒªÕÒµÄ´ð°¸¡£
	 */

	require_once "email.class.php";
	//******************** ÅäÖÃÐÅÏ¢ ********************************
	$smtpserver = "smtp.163.com";//SMTP·þÎñÆ÷
	$smtpserverport =25;//SMTP·þÎñÆ÷¶Ë¿Ú
	$smtpusermail = "13438891903@163.com";//SMTP·þÎñÆ÷µÄÓÃ»§ÓÊÏä
	$smtpemailto = $_POST['toemail'];//·¢ËÍ¸øË­
	$smtpuser = "13438891903";//SMTP·þÎñÆ÷µÄÓÃ»§ÕÊºÅ
	$smtppass = "03150414dong";//SMTP·þÎñÆ÷µÄÓÃ»§ÃÜÂë
	$mailtitle = "唯不忘相思";//ÓÊ¼þÖ÷Ìâ
	$mailcontent = "<h1>".$_POST['content']."</h1>";//ÓÊ¼þÄÚÈÝ
	$mailtype = "HTML";//ÓÊ¼þ¸ñÊ½£¨HTML/TXT£©,TXTÎªÎÄ±¾ÓÊ¼þ
	//************************ ÅäÖÃÐÅÏ¢ ****************************
	$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//ÕâÀïÃæµÄÒ»¸ötrueÊÇ±íÊ¾Ê¹ÓÃÉí·ÝÑéÖ¤,·ñÔò²»Ê¹ÓÃÉí·ÝÑéÖ¤.
	$smtp->debug = false;//ÊÇ·ñÏÔÊ¾·¢ËÍµÄµ÷ÊÔÐÅÏ¢
	$state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);
	if($state==""){
		echo "fail in send ";
		exit();
	}
	echo "Send success ";

?>