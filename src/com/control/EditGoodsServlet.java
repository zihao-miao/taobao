package com.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dao.BaseDAO;

public class EditGoodsServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session=request.getSession();
		String userid=(String)session.getAttribute("userid");
		if(userid!=null && !userid.equals("")){
			request.setCharacterEncoding("utf-8");
		    String goodsname=request.getParameter("goodsname");
		    String goodsclassid=request.getParameter("goodsclassid");
		    String pricenew=request.getParameter("pricenew");
		    String priceold=request.getParameter("priceold");
		    String goodsid=request.getParameter("goodsid");
		    System.out.println("goodsname"+goodsname);
		    System.out.println("goodsclassid"+goodsclassid);
		    System.out.println("pricenew"+pricenew);
		    System.out.println("goodsid"+goodsid);
		    BaseDAO dao=new BaseDAO();
		    boolean status=dao.updateOne("goods","goodsname='"+goodsname+"',goodsclassid='"+goodsclassid+"',pricenew='"+pricenew+"',priceold='"+priceold+"' where goodsid="+goodsid);
		    response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
		    if(status==true){
		    	out.println("1");
		    }else{
		    	out.println("0");
		    }
			out.flush();
			out.close();
		}
	}

}
